/*
* Copyright 2012 Research In Motion Limited.
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
 * @class The <code>MessageAccount</code> object provides .  
 * @toc {PIM} MessageAccount 
 * @BB10X
 * @featureID blackberry.pim.message
 * @permission access_pimdomain_messaging Permits your app to access message.
 */
blackberry.pim.message.MessageAccount = {};

/**
 * @function
 * @description Retrieves the information of all the message folders under the message account. It is a JavaScript array contains object that has "name" and "type" fields.
 * @returns {Object[]}
 * @BB10X
 * @example
 * function test() {
 *     var i,
 *         defaultAccount = blackberry.pim.message.MessageService.getDefaultMessageAccount(),
 *         folderInfo = defaultAccount.getMessageFolderInfo(),
 *         folderInfoMessage;
 *
 *     folderInfoMessage = "The message account " + defaultAccount.name + " contains [";
 *     for (i=0; i&lt;folderInfo.length; i++) {
 *         if (i == folderInfo.length - 1) {
 *             folderInfoMessage = folderInfoMessage + folderInfo[i].name + "(" + folderInfo[i].type + ")";
 *         } else {
 *             folderInfoMessage = folderInfoMessage + folderInfo[i].name + "(" + folderInfo[i].type + "), ";
 *         }
 *     }
 *     folderInfoMessage = folderInfoMessage + "]";
 *
 *     console.log(folderInfoMessage);
 * }
 */
blackberry.pim.message.MessageAccount.prototype.getMessageFolderInfo = function () {};

/**
 * Contains the name of the message account. 
 * @type String
 * @BB10X
 */
blackberry.pim.message.MessageAccount.prototype.name = { };

