/*
 * Copyright 2010-2012 Research In Motion Limited.
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
 * @toc {PIM} CalendarError
 * @featureID blackberry.pim.calendar
 * @class The <code>CalendarError</code> object contains error codes and is returned in the error callback.
 */
blackberry.pim.calendar.CalendarError = {};

/**
 * @type Number
 * @readOnly
 * @description A code specifying the type of error that occurred.
 * @BB10X
 * @example
 * function findEvents() {
 *     var cal = blackberry.pim.calendar;
 *     cal.findEvents(null, onFindSuccess, onFindError);
 * }
 *
 * function onFindSuccess(events) {
 *     alert("Find events succeeded");
 * }
 *
 * function onFindError(error) {
 *     switch (error.code) {
 *     case error.UNKNOWN_ERROR:
 *         alert("Event find error: An unknown error occurred");
 *         break;
 *     case error.INVALID_ARGUMENT_ERROR:
 *         alert("Event find error: Invalid argument");
 *         break;
 *     case error.PERMISSION_DENIED_ERROR:
 *         alert("Event find error: Permission denied error");
 *         break;
 *     default:
 *         alert("Event find error: other error, code=" + error.code);
 *     }
 * }
 */
blackberry.pim.calendar.CalendarError.prototype.code = "";

/**#@-*/

/**
 * @type Number
 * @constant
 * @default 0
 * @description An unknown error occurred.
 * @BB10X
 */
 blackberry.pim.calendar.CalendarError.UNKNOWN_ERROR = 0;

/**
 * @type Number
 * @constant
 * @default 1
 * @description A parameter was incorrect.
 * @BB10X
 */
 blackberry.pim.calendar.CalendarError.INVALID_ARGUMENT_ERROR = 1;

/**
 * @type Number
 * @constant
 * @default 2
 * @description The operation timed out.
 * @BB10X
 */
 blackberry.pim.calendar.CalendarError.TIMEOUT_ERROR = 2;

 /**
 * @type Number
 * @constant
 * @default 3
 * @description The operation failed because a previous operation is pending.
 * @BB10X
 */
 blackberry.pim.calendar.CalendarError.PENDING_OPERATION_ERROR = 3;

 /**
 * @type Number
 * @constant
 * @default 4
 * @description An IO error occurred.
 * @BB10X
 */
 blackberry.pim.calendar.CalendarError.IO_ERROR = 4;

 /**
 * @type Number
 * @constant
 * @default 5
 * @description The operation is not supported.
 * @BB10X
 */
 blackberry.pim.calendar.CalendarError.NOT_SUPPORTED_ERROR = 5;

 /**
 * @type Number
 * @constant
 * @default 20
 * @description The operation failed due to insufficient permissions.
 * @BB10X
 */
 blackberry.pim.calendar.CalendarError.PERMISSION_DENIED_ERROR = 20;

