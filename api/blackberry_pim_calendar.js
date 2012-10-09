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
 * @namespace The Calendar object provides functions for creating and finding contacts.
 * @toc {PIM} Calendar
 * @featureID blackberry.pim.calendar
 * @permission access_pimdomain_calendars Permits your app to access calendar.
 */
blackberry.pim.calendar = {
    /**
     * @name blackberry.pim.calendar.createEvent
     * @function
     * @description Returns a new CalendarEvent object. This method does not persist the CalendarEvent object to the device. To persist the CalendarEvent object to the device, invoke the CalendarEvent.save method. <b>Not in DAP specs</b>
     * @param {Object} properties Optional object literal that specifies the field values for the CalendarEvent object. The object should be in the following form (with any number of properties):
     * @param {blackberry.pim.calendar.CalendarFolder} [folder]  Optional CalendarFolder object that contains the event. If no folder is specified, the event will be created in the default calendar.
     * @returns {blackberry.pim.calendar.CalendarEvent}
     * @example
     * var evt;
     *
     * function onSaveSuccess(created) {
     *     evt = created; // set evt to the object returned in save success callback, which contains the persisted event id
     *     alert("Event saved to device: " + evt.id);
     * }
     *
     * function onSaveError(error) {
     *     alert("Error saving event to device: " + error.code);
     * }
     *
     * function createEventInDefaultCalendarFolder(summary, location) {
     *     var cal = blackberry.pim.calendar;
     *     evt = cal.createEvent({
     *         "summary": summary,
     *         "location": location,
     *         "start": new Date("Jan 01, 2015, 12:00"),
     *         "end": new Date("Jan 01, 2015, 12:30"),
     *         "timezone": "America/New_York" // if timezone is specified explicitly, then the times will be for that particular timezone; otherwise, the times will be for the current device timezone
     *     });
     *     evt.save(onSaveSuccess, onSaveError);
     * }
     * @BB10X
     */
    createEvent: function (properties, folder) {},

    /**
     * @name blackberry.pim.calendar.findEvents
     * @function
     * @description Find calendar events in the calendar based on some criterion.
     * @param {blackberry.pim.calendar.CalendarFindOptions} findOptions  Options to be applied to the search.
     * @param {function} onFindSuccess Success callback function that is invoked with the events returned from the calendar.
     * @callback {blackberry.pim.calendar.CalendarEvent[]} onFindSuccess.events The array of CalendarEvent objects from the search.
     * @param {function} [onFindError] Optional error callback function. Invoked when error occurs.
     * @callback {blackberry.pim.calendar.CalendarError} onFindError.error The CalendarError object which contains the error code.
     * @returns {void}
     * @example
     * function onFindSuccess(events) {
     *     events.forEach(function (evt) {
     *         alert("Event summary: " + evt.summary);
     *         alert("Event location: " + evt.location);
     *     });
     * }
     *
     * function onFindError(error) {
     *     alert("Error: " + error.code);
     * }
     *
     * function findEvents(keyword) {
     *     var cal = blackberry.pim.calendar;
     *     var filter = new cal.CalendarEventFilter(keyword);
     *     var findOptions = new cal.CalendarFindOptions(filter, null, cal.CalendarFindOptions.DETAIL_FULL);
     *
     *     cal.findEvents(findOptions, onFindSuccess, onFindError);
     * }
     * @BB10X
     */
    findEvents: function (findOptions, onFindSuccess, onFindError) {},

    /**
     * @name blackberry.pim.calendar.findSingleEvent
     * @function
     * @description Find single calendar event in the calendar by event id and CalendarFolder. This is useful if you have an instance of the CalendarEvent object, and wants to get the "fresh" copy from the calendar (in case the event has been changed by other apps).
     * @param {Object} findOptions An object literal that specifies the event id and {@link blackberry.pim.calendar.CalendarFolder} that contains the event. The object should be in the following form: <br><pre>
     * {
     *     eventId: &lt;id of the event&gt;,
     *     folder: &lt;CalendarFolder that contains the event&gt;
     * }
     * </pre>
     * @param {function} onFindSuccess Success callback function that is invoked with the event returned from the calendar.
     * @callback {blackberry.pim.calendar.CalendarEvent} onFindSuccess.event The {@link blackberry.pim.calendar.CalendarEvent} object from the search. If no event is found, the event object will be null.
     * @param {function} [onFindError] Optional error callback function. Invoked when error occurs.
     * @callback {blackberry.pim.calendar.CalendarError} onFindError.error The {@link blackberry.pim.calendar.CalendarError} object which contains the error code.
     * @returns {void}
     * @BB10X
     */
    findSingleEvent: function (findOptions, onFindSuccess, onFindError) {},

    /**
     * @name blackberry.pim.calendar.getNextEventsWithAttendee
     * @function
     * @description Fetches the nearest future meetings in which the user and the specified person participate. <b>Not in DAP specs</b>
     * @param {Object} findOptions An object literal that specifies the attendee email and the number of events to returned. The object should be in the following form: <br><pre>
     * {
     *    attendeeEmail: &lt;the email address that identifies the person that should be present in the returned meetings&gt;,
     *    limit: &lt;the maximum number of events to return&gt;
     * }
     * @param {function} onSuccess Success callback function that is invoked with the events returned from the calendar.
     * @callback {blackberry.pim.calendar.CalendarEvent[]} onSuccess.events The array of {@link blackberry.pim.calendar.CalendarEvent} objects.
     * @param {function} [onError] Optional error callback function. Invoked when error occurs.
     * @callback {blackberry.pim.calendar.CalendarError} onFindError.error The {@link blackberry.pim.calendar.CalendarError} object which contains the error code.
     * @returns {void}
     * @BB10X
     */
    getNextEventsWithAttendee: function (findOptions, onSuccess, onError) {},

    /**
     * @name blackberry.pim.calendar.getLastEventsWithAttendee
     * @function
     * @description Fetches the most recent meetings in which the user and the specified person participate.
     * @param {Object} findOptions An object literal that specifies the attendee email and the number of events to returned. The object should be in the following form: <br><pre>
     * {
     *    attendeeEmail: &lt;the email address that identifies the person that should be present in the returned meetings&gt;,
     *    limit: &lt;the maximum number of events to return&gt;
     * }
     * @param {function} onSuccess Success callback function that is invoked with the events returned from the calendar.
     * @callback {blackberry.pim.calendar.CalendarEvent[]} onSuccess.events The array of {@link blackberry.pim.calendar.CalendarEvent} objects.
     * @param {function} [onError] Optional error callback function. Invoked when error occurs.
     * @callback {blackberry.pim.calendar.CalendarError} onFindError.error The {@link blackberry.pim.calendar.CalendarError} object which contains the error code.
     * @returns {void}
     * @BB10X
     */
    getLastEventsWithAttendee: function (findOptions, onSuccess, onError) {},

    /**
     * @name blackberry.pim.calendar.getCalendarFolders
     * @function
     * @description Retrieves calendar folders from all calendar accounts.
     * @returns {blackberry.pim.calendar.CalendarFolder[]}
     * @BB10X
     */
    getCalendarFolders: function () {},

    /**
     * @name blackberry.pim.calendar.getDefaultCalendarFolder
     * @function
     * @description Retrieves the default calendar folder.
     * @returns {blackberry.pim.calendar.CalendarFolder}
     * @BB10X
     */
    getDefaultCalendarFolder: function () {},

    /**
     * @name blackberry.pim.calendar.getTimezones
     * @function
     * @description Retrieves the list of all time zones supported by the device. The time zones are based on the Olson time zone database. For more information, refer to <a href="http://www.iana.org/time-zones" target="_blank">IANA</a>.
     * @returns {String[]}
     * @BB10X
     */
    getTimezones: function () {},

    /**
     * @name blackberry.pim.calendar.getCurrentTimezone
     * @function
     * @description Retrieves the time zone currently used by the device.
     * @returns {String}
     * @example
     * function getCurrentTimezone() {
     *     return blackberry.pim.calendar.getCurrentTimezone(); // e.g. "America/New_York"
     * }
     * @BB10X
     */
    getCurrentTimezone: function () {}
};