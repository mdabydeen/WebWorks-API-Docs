/*
* Copyright 2010-2011 Research In Motion Limited.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
* @toc {User Identity} User Identity 
* @BB10X
* @RIPPLE
* @namespace The User Identity object contains information regarding the user&apos;s identity and accounts on a BlackBerry smartphone.
*
* <h3>Identity Service SDK Overview - interfaces for using Identity
* Services from 3rd Party applications</h3><br />
*
* <p><b>What functionality does this Identity Service SDK provide to apps?</b>
*
* <p>This SDK provides a series of functions that enable an application to choose an
* identity provider(s) for their application, and to request authentication tokens
* from that provider, as well as information about the user.
*
* <p>At present, the only Identity Provider available is BlackBerry ID. As more
* identity providers become available, this SDK will provide access to those
* providers.
*
*
* <p><b>Why integrate with Identity Service?</b>
*
* <p>If your app needs to interact with an off-device service that requires user
* authentication, you can integrate with Identity Service to provide seamless
* access to the off-device service. The interaction from the app to the off-device
* service is 'seamless' because the user is not prompted within the app for the
* username and password required by the off-device service. Instead, BlackBerry ID
* can pass back a 'token' that authenticates the user's identity, and that token
* can be read and understood by the off-service device, thus allowing the user
* access to that off-device content WITHOUT requiring user interaction for
* authentication.
*
* <p><b>Fictitious Example</b>: Imagine an app called 'MyPics' that has a user's
* photo content stored off-device, and the content is accessible from the web and
* from BlackBerry devices. If 'MyPics' is integrated with BlackBerry ID
* (i.e. we've created a token specifically for them), the app can request a token
* from BlackBerry ID to confirm the user's identity. The app can send that token
* to the off-device content service for 'MyPics', as a way of 'signing in' that
* user to their MyPics account WITHOUT requiring the user to enter a username and
* password within the 'MyPics' app. The result is a seamless user experience for
* the app; the user will get their photos on the device without having to sign in
* to the 'MyPics' service. Since they are already signed in to their device with
* their BlackBerry ID, and since the app is integrated with BlackBerry ID to use
* tokens, it all happens without any user annoyance of being prompted to 'sign in'
* to MyPics.
*
* <p>Even if your app doesn't need to communicate with off-device services using
* tokens, there are other useful APIs in this SDK that provide access the user's
* account information (first name, last name, screen name, or username).
*
* <p>The next section provides a more detailed technical overview of the APIs that
* provide this functionality.<br />
*
*
* <p><b>Identity Service SDK functionality - API overview</b>
*
* <p>This Identity Service WebWorks SDK provides an interface for applications to make
* use of BlackBerry ID functionality from within their app.
*
* <p>The APIs provided in this SDK enable apps to do the following:
* - retrieve the account information of the user who is signed in with their
* BlackBerry ID on the BB10 device. The API <b>getProperties()</b> can be
* used to retrieve the user's first name, last name, username, and screenname.
*
* <p>- retrieve tokens that prove the user's identity for off-device services
* <i>(known as 'relying parties', because they are <b>relying</b> on BlackBerry ID
* to confirm the user's identity)</i>, so that the user can have seamless access
* to that off-device service without being required to enter their username and
* password. These tokens are used by the off-device service (relying party) to
* confirm the identity of the user. <b>NOTE: The APIs <b>getToken()</b> and
* <b>clearToken()</b> can only be used if the relying party has gone through
* integration process with RIM to have tokens defined for that relying party.</b>
*
* <p>- for background services where it doesn't make sense to show any screens to the
* user (i.e. background services that do not have any UI), suppress the ability
* for the Identity Service to pop up an authentication/password confirmation
* dialog box. The API <b>setOption()</b> is provided to ensure that the
* Identity Service does not present a pop up screen for authentication/password
* verification within background services where that wouldn't make sense.
*
* <p><b>Important</b>: There is never a need for an application to present a
* "sign in" screen to the user. All the IDS APIs listed above will check to see if
* their is a BlackBerry ID associated with the device, and if there isn't one,
* they will pop an authentication (sign in) screen on the device (unless the
* calling app runs in the background and has 'set_GUI_allowed = False' to
* specifically prevent this from happening.)
*
* <p><b>About Callback functions</b>
*
* <p>Several IDS APIs have the following 2 parameters:
* -    Success callback function
* -    Failure callback function
*
* <p>The Identity Service responds asynchronously to API calls made by an
* application. Upon detection of a response, the IDS library will parse the
* response (which will either be success or failure), and invoke the corresponding
* callback function that the app has provided for the success or failure case.
*
* <p>So the callback functions are a mechanism for IDS library to pass the parsed
* response from the daemon back to the calling application. The callback functions
* cannot be NULL; the app must specify what to do in both the success and failure
* scenarios.
*
* <p><b>Integrating an application with IDS APIs</b>
*
*
* <p>The calling app uses the function <b>registerProvider()</b> which will
* connect the app to an Identity Service. This step must be done
* <i>before</i> the app calls any of the IDS APIs described above
* (getToken(), clearToken(), etc). After the app makes an API call to
* one of the IDS APIs listed above (i.e. getToken), the IDS library will
* asynchronously process that request, and call the success/failure callback provided.
*
* @featureID blackberry.user.identity
* @permission access_bbid_pii Permits your app to access user identity information.
*/
blackberry.user.identity = {

/**
 * The getVersion() function retrieves the version of the IDS library
 * that your application is using.
 * @BB10X
 * @returns {The version of IDS library}
 * 	"1000000"
 * @example 
* &lt;script type=&quot;text&sol;javascript&quot;&gt;
*   alert(&quot;Identity Service version is:&quot; + blackberry.user.identity.getVersion());
* &lt;&sol;script&gt; */
getVersion : function(){},

/**
 * Applications use this function to register which Identity Provider(s) that
 * they want to use.  Once the application has initialized the library, it can
 * register for each of the identity providers it is interested in.
 * @param {String} name The name of the identity provider that the application wants to
 * use for retrieving user identity information (only BlackBerry ID is supported
 * at this time).
 * @returns {int} result
 * @BB10X
 * @RIPPLE
*/
registerProvider : function(name) { },


/**
 * Applications use this function to register which Identity Provider(s) that
 * they want to use.  Once the application has initialized the library, it can
 * register for each of the identity providers it is interested in.
* @returns {ids_result_t}
* @BB10X
* @RIPPLE
*/
setOption : function(option, value) { },

/**
 * Applications use this function to register which Identity Provider(s) that
 * they want to use.  Once the application has initialized the library, it can
 * register for each of the identity providers it is interested in.
* @returns {ids_result_t}
* @BB10X
* @RIPPLE
*/
getToken : function(idsProvider, tokenType, appliesTo, successCallback, failureCallback) { },

/**
 * Issue a clear token request.  In cases where the token seems to be invalid or
 * too close to expiry to be deemed useful, an application can clear out the
 * currently cached token in order to retrieve a newly generated token in the
 * next getToken() call.
 *
 * @param {String} provider The identity provider to send this request to.
 * @param {String} tokenType A token type. It must be NOT NULL
 * and 32 characters >= tokenType > 0 character
 * @param {String} appliesTo The application or service to which the token applies. It
 * must be NOT NULL and 96 characters >= applies_to > 0 character
 * @callback {Function} successCallback Function which is invoked upon successful operation of this
 * method.
 * @callback {Function} failureCallback Function which is invoked when this method fails. This
 * callback contains an errorCode parameter to specify the failure condition.
 *
 * <b>Error Handling:</b><br>
 * Requests that do not complete successfully will result in the failure
 * callback being called with one of the following result codes:
 * - 49999: An internal error has occurred attempting to process
 * the request.
 * - 50009: The appliesTo value is not valid.
 * - 50008: The tokenType value is not valid.
 * - 50010: There are not enough resources available to
 * process the request.
 * - 50003: The account is currently locked, token
 * access is unavailable while locked.
 * - 50004: The user could not be
 * authenticated.

 
 
 * @returns {ids_result_t}
* @BB10X
* @RIPPLE
*/
clearToken : function(idsProvider, tokenType, appliesTo, successCallback, failureCallback) { },

/**
 * Applications use this function to register which Identity Provider(s) that
 * they want to use.  Once the application has initialized the library, it can
 * register for each of the identity providers it is interested in.
* @returns {ids_result_t}
* @BB10X
* @RIPPLE
*/
getProperties : function(idsProvider, userProperties, successCallback, failureCallback) { };

};