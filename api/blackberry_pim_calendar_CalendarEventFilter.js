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
 * @class The CalenderEventFilter object captures the searchable parameters for finding calendar event items. <b>DAP specs does not have as many fields in their CalendarEventFilter</b>
 * @toc {PIM} CalenderEventFilter
 * @featureID blackberry.pim.calendar
 */
blackberry.pim.calendar.CalenderEventFilter = {};

/**
 * @description Start of the query's time range. All events that enter the range should be returned.
 * @type Date
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.start = null;

/**
 * @description End of the query's time range. Any event that crosses the range should be returned.
 * @type Date
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.end = null;

/**
 * @description If true, recurring events will be expanded in search results. This means all occurrences
 * happening in the time range will be returned.
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.expandRecurring = false;

/**
 * @description String used in the prefix search. By setting the prefix, the user instructs the
 * back-end to return only events whose summary or location fields start with it.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.prefix = "";

/**
 * @description When folders are specified, only events that belong to folders are returned.
 * @type String[]
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.folderIds = [];
