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
     * @description Find calendar event(s) in the calendar based on some criteria. This function can be used to look up events based on start/end time, location, or summary. This function can also be used to look up a single event given the event id and CalendarFolder which contains it. The second use case is useful if you have an instance of the CalendarEvent object, and wants to get the "fresh" copy from the calendar (in case the event has been changed by other apps).
     * @param {blackberry.pim.calendar.CalendarFindOptions} findOptions  Options to be applied to the search.
     * @param {function} onFindSuccess Success callback function that is invoked with the events returned from the calendar.
     * @callback {blackberry.pim.calendar.CalendarEvent[]} onFindSuccess.events The array of CalendarEvent objects from the search.
     * @param {function} [onFindError] Optional error callback function. Invoked when error occurs.
     * @callback {blackberry.pim.calendar.CalendarError} onFindError.error The CalendarError object which contains the error code.
     * @returns {void}
     * @example
     * var cal = blackberry.pim.calendar;
     *
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
     * // Use case 1: find any events by keyword in any of the following fields:
     * // -location
     * // -summary
     * // -attendees' names or emails
     * function findEventsByKeyword(keyword) {
     *     var filter = { "location" : location };
     *     var findOptions = { 
     *          "filter" : filter,
     *          "detail" : CalendarFindOptions.DETAIL_FULL
     *          };
     *
     *     // Find all events that has the specified keyword in summary, location or attendees' name/email
     *     cal.findEvents(findOptions, onFindSuccess, onFindError);
     * }
     *
     * // Use case 2: find one single event by event id and folder
     * function findSingleEvent(eventId, folder) {
     *     var findOptions,
     *         filter {};
     *     
     *     filter.eventId = eventId;
     *     filter.folders  = [folder];
     *
     *     // When finding single events, the returned event will always have all fields populated,
     *     // regardless of what detail level the user specifies
     *     findOptions = { 
     *                      "filter" : filter,
     *                      "detail" : CalendarFindOptions.DETAIL_FULL
     *                   };
     *
     *     // Find the single event that has the specified event id that belongs to the specified folder
     *     cal.findEvents(findOptions, onFindSuccess, onFindError);
     * }
     *
     * // Extra params will be ignored in this example
     * function findEventsExtraParamsIgnored(keyword, eventId, folder) {
     *     var filter = {
     *             substring: keyword,           // ignored
     *             eventId: 2,                   // applied in search
     *             end: new Date("2012-12-21"),  // ignored
     *             expandRecurring: false,       // ignored - recurring event will be returned as one event
     *             folders: [folder],            // applied in search
     *             start: new Date("2012-12-12")
     *         },
     *         findOption = { 
                                "filter" : filter,
                                "detail" : cal.CalendarFindOptions.DETAIL_FULL
                            };
     *
     *    // By specifying event id and folder, you instruct the search engine to look for the event with
     *    // the matching event id and folder. All other search parameters will be ignored.
     *    // The events array in the callback contain at most one event.
     *    cal.findEvents(findOptions, onFindSuccess, onFindError);
     * }
     *
     * @BB10X
     */
    findEvents: function (findOptions, onFindSuccess, onFindError) {},

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
    getDefaultCalendarFolder: function () {}
};