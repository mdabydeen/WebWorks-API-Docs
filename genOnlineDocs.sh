set +e

hudson_url="http://ci0000001875214:9080/hudson/"
GITHUB_USERNAME="blackberry-webworks"
PROJECT_NAME="WebWorks-API-Docs"
JOB_ADDED=1
PROJECT_BRANCH=$( git branch | awk '{ if(NF == 2) {print $NF }}' )

case "$JOB_NAME" in
  *gh-pages* ) set -e && echo "Cannot build gh-pages job. Exiting ..." && exit 1;;
esac

# Checkout gh-pages branch. If it doesn't exist set up repo to track remote
# gh-pages branch

echo "Checking out gh-pages branch"

git stash

git checkout gh-pages

if [ $? != 0 ] ; then
  git checkout -b gh-pages origin/gh-pages
  
  if [ $? != 0 ] ; then
    echo "Could not checkout gh-pages branch. Exiting ..."
    exit 1
  fi
fi

git pull origin gh-pages

# Replace old docs with lastest built docs

echo "Updating $JOB_NAME folder ..."

rm -rf $JOB_NAME
cp -rf output $JOB_NAME
git add $JOB_NAME
git commit -m"Updated JSDocs to latest build"

# Check whether to add current job to list of tracked jobs
if [ $( cat jobs.txt | grep -x "$JOB_NAME" | wc -l ) -eq 0 ] ; then
  echo "Adding $JOB_NAME to list of tracked jobs ..."
  JOB_ADDED=0
  echo "$JOB_NAME" >> jobs.txt
  git add jobs.txt
  git commit -m"Added entry to jobs.txt for $UPSTREAM_JOB job"
fi

# Remove jobs that no longer exist

echo "Removing jobs that no longer exist"
jobs=( $( cat jobs.txt ) )

for job in "${jobs[@]}" ; do
  job=$( echo "$job" | sed "/\r/d" )
  wget -O - "${hudson_url}job/$job/config.xml" 2>/dev/null >/dev/null

  if [ $? -ne 0 ] ; then
    echo "$job no longer exists. Deleting ..."
    
    sed "/$job/d" jobs.txt > jobs.tmp
    mv jobs.tmp jobs.txt

    # Delete job in index file. File may link to either index.html or topics.html in docs output folder
    sed "/<a href='http:\/\/${GITHUB_USERNAME}.github.com\/${PROJECT_NAME}\/${job}\/view\/index.html'>${job}<\/a><br \/>/d" index.html > index.tmp
    sed "/<a href='http:\/\/${GITHUB_USERNAME}.github.com\/${PROJECT_NAME}\/${job}\/view\/topics.html'>${job}<\/a><br \/>/d" index.tmp > index.tmp2
    mv index.tmp2 index.html

    git add jobs.txt index.html
    git rm -rf $job/
    git commit -m"Removed docs for $job from the repo"
  fi
  
done


# Check whether we need to append an entry to the root index page.
# Only done if this job is new.

if [ $JOB_ADDED -eq 0 ] ; then
  echo "Appending new link to docs on root index page ..."

  sed "s?id='NewRecord'></a>?href='http://${GITHUB_USERNAME}.github.com/${PROJECT_NAME}/${JOB_NAME}/view/topics.html'>${JOB_NAME}</a><br />%<a id='NewRecord'></a>?g" index.html | tr '%' '\n' > index.tmp
  mv index.tmp index.html
  git add index.html
  git commit -m"Updated root index page with new entry for job $JOB_NAME"
fi

set -e

exit 0
