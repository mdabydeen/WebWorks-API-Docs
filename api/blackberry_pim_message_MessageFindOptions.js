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
 * @class The MessageFindOptions object contains options that are used by {@link blackberry.pim.message.MessageService.find}().
 * @toc {PIM} MessageFindOptions
 * @featureID blackberry.pim.message
 * @constructor Constructor for a new MessageFindOptions object.
 * @param {blackberry.pim.message.MessageAccount} account Mandatory. This specifies the message account under which the search will be conducted.
 * @param {blackberry.pim.message.MessageFolder} folder Mandatory. This specifies the message folder under which the search will be conducted.
 * @param {blackberry.pim.message.MessageFindFilter} [filter] Optional. A MessageFindFilter object that specifies criterias for the search.
 * @param {Number} [offset] Optional. Set the offset for the search. If not specified, it will start the search from the first message.
 * @param {Number} [limit] Optional. Set the maximum number of results to return from the search. If not specified, all matching messages will be returned.
 */
blackberry.pim.message.MessageFindOptions = {};

/**
 * @description A search filter with which specifies criterias for the search.
 * @type blackberry.pim.message.MessageFindFilter
 * @BB10X
 */
blackberry.pim.message.MessageFindOptions.prototype.filter = null;

/**
 * @type Number
 * @description The beginning offset for the serach.
 * @BB10X
 */
blackberry.pim.message.MessageFindOptions.prototype.offset = 0;

/**
 * @type Number
 * @description The maximum number of returned results.
 * @BB10X
 */
blackberry.pim.message.MessageFindOptions.prototype.limit = 0;

/**
 * @type String
 * @description The id of the event. Used for looking up single event.
 * @BB10X
 */
blackberry.pim.message.MessageFindOptions.prototype.eventId = "";

/**
 * @type blackberry.pim.message.CalendarFolder
 * @description The folder that contains the event. Used for looking up single event.
 * @BB10X
 */
blackberry.pim.message.MessageFindOptions.prototype.folder = null;

