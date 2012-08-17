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
 * @class The CalendarEvent object represents an event in the device calendar. It can be obtained by calling {@link blackberry.pim.calendar.createEvent}() or {@link blackberry.pim.calendar.findEvents}()
 * @toc {PIM} CalendarEvent
 * @featureID blackberry.pim.calendar
 * @permission access_pimdomain_calendars Permits your app to access calendar.
 */
blackberry.pim.calendar.CalendarEvent = {};

/**
 * @description A globally unique identifier.
 * @readOnly
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.id = "";

/**
 * @description A description of the event.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.description = "";

/**
 * @description A plain text description of the location of the event.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.location = "";

/**
 * @description A summary of the event.
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.summary = "";

/**
 * @description The start date and time of the event.
 * @type Date
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.start = null;

/**
 * @description The end date and time of the event.
 * @type Date
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.end = null;

/**
 * @description An indication of the user's status of the event. <b>TODO meetingStatus() in native CalendarEvent returns a number and the values don't match up the specs.</b>
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.status = "";

/**
 * @description An indication of the display status to set for the event. <b>TODO busyStatus() in native CalendarEvent can be one of: free, tentative, busy, or out of office.</b>
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.transparency = "";

/**
 * @description The recurrence or repetition rule for this event.
 * @type blackberry.pim.calendar.CalendarRepeatRule
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.recurrence = null;

/**
 * @description A reminder for the event, specified as the number of minutes between the alert and the start time.<b>TODO native CalendarEvent takes a number of minutes before start of event, but DAP CalendarEvent does it differently http://www.w3.org/TR/calendar-api/#widl-CalendarEvent-reminder</b>
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.reminder = 0;

/**
 * @description The list of attendees in the event.<b>TODO DAP CalendarEvent has no mention of attendees at all</b>
 * @type blackberry.pim.calendar.Attendee[]
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.attendees = null;

/**
 * @description True if the event is an all-day event.<b>TODO DAP CalendarEvent does not have this</b>
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.allDay = false;

/**
 * @description True if the event represents a birthday.<b>TODO DAP CalendarEvent does not have this</b>
 * @type Boolean
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.birthday = false;

/**
 * @description Sensitivity level of the event: {@link blackberry.pim.calendar.CalendarEvent.NORMAL}, {@link blackberry.pim.calendar.CalendarEvent.PERSONAL}, {@link blackberry.pim.calendar.CalendarEvent.PRIVATE} or {@link blackberry.pim.calendar.CalendarEvent.CONFIDENTIAL} <b>TODO DAP CalendarEvent does not have this</b>
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.sensitivity = 0;

/**
 * @description Identifier for the account that owns the event.<b>TODO DAP CalendarEvent does not have this</b>
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.accountId = "";

/**
 * @description This attribute is only meaningful in events that are recurrence exceptions.<br>
 * A recurrence exception is a differing instance of a recurring event. An example:
 * a daily meeting at 2:00 PM that is rescheduled to 3:00 PM on a given day. This
 * rescheduled occurrence is represented as an exception. It is stored in the
 * database as a separate event and it references the original recurring event by
 * means of the parent id.
 * @readOnly
 * @type String
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.parentId = "";

/**
 * Saves a new event to the calendar, or updates an existing event if an event with the same id already exists.
 * @param {function} onSaveSuccess The callback function that will be invoked when the contact is saved successfully.
 * @callback {blackberry.pim.calendar.CalendarEvent} onSaveSuccess.event The CalendarEvent object.
 * @param {function} onSaveError The callback function that will be invoked when the event cannot be saved.
 * @callback {blackberry.pim.calendar.CalendarError} onSaveError.error The CalendarError object which contains the error code.
 * @returns {void}
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.save = function () {};

/**
 * Removes the event from the calendar. An error callback is called with a CalendarError object if the removal is unsuccessful.
 * @param {function} onRemoveSuccess The callback function that will be invoked when the event is removed successfully.
 * @param {function} onRemoveError The callback function that will be invoked when the event cannot be removed.
 * @callback {blackberry.pim.calendar.CalendarError} onRemoveError.error The CalendarError object which contains the error code.
 * @returns {void}
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.remove = function () {};

/**
 * Returns a new CalendarEvent object that is a deep copy of the calling object, with the id property set to null.
 * @returns {blackberry.pim.calendar.CalendarEvent}
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.prototype.clone = function () {};

/**
 * @description Sensitivity level for unrestricted events.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.NORMAL = 0;

/**
 * @description Sensitivity level for personal events.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.PERSONAL = 1;

/**
 * @description Sensitivity level for private events.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.PRIVATE = 2;

/**
 * @description Sensitivity level for confidential events.
 * @constant
 * @type Number
 * @BB10X
 */
blackberry.pim.calendar.CalendarEvent.CONFIDENTIAL = 3;