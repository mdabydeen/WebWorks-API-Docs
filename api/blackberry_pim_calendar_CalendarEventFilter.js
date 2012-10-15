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
 * @class The CalenderEventFilter object captures the searchable parameters for finding calendar event items.
 * @toc {PIM} CalenderEventFilter
 * @featureID blackberry.pim.calendar
 * @constructor Constructor for a new CalenderEventFilter object.
 * @param {String} [substring] Optional. If specified, only events whose summary or location fields contain the specified value will be returned.
 * @param {blackberry.pim.calendar.CalendarFolder[]} [folders] Optional. If specified, only events contained in the specified CalendarFolders will be returned.
 * @param {Date} [start] Optional. Start of the query's time range.
 * @param {Date} [end] Optional. End of the query's time range.
 * @param {Number} [detail] Optional. Detail level of the search results. This should be one of the DETAIL_* constants. Defaults to {@link blackberry.pim.calendar.CalendarFindOptions.DETAIL_AGENDA}.
 */
blackberry.pim.calendar.CalenderEventFilter = {};

/**
 * @type String
 * @description The id of the event. Used for looking up single event.
 * @BB10X
 */
blackberry.pim.calendar.CalendarFindOptions.prototype.eventId = "";

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
 * @description Substring used in the search. By setting the substring, the user instructs the
 * back-end to return only events whose summary or location fields contain the specified value.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.substring = "";

/**
 * @description When folders are specified, only events that belong to folders are returned. When searching for a single event,
 * this array should only contain one folder.
 * @type blackberry.pim.calendar.CalendarFolder[]
 * @BB10X
 */
blackberry.pim.calendar.CalenderEventFilter.prototype.folders = [];
