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
 * @toc {User Interface} Toast
 * @featureID blackberry.ui.toast
 * @namespace The Toast object contains functions for displaying toast notifications.
 * <p/>
 * The functionality of this object allows the developer to display system toast notifications within their WebWorks application.
 */
blackberry.ui.toast ={

        /**
         * @param {String} message Message to be displayed in the toast.
         * @param {String} [buttonText] Optional parameter that specifies the label for the button within the toast.
         * @callback {function} [buttonCallback] Optional callback for receiving the button event when the user selects the toast button.
         * @callback {Number} [buttonCallback.toastId] The numeric ID for the toast which this callback belongs to.
         * @callback {function} [dismissCallback] Optional callback for receiving an event when the toast dismisses either through the toast's timeout or when the button is selected.
         * @callback {Number} [dismissCallback.toastId] The numeric ID for the toast which this callback belongs to.
         * @returns {Number} A numeric ID to reference this toast by.
         * @description Displays a toast notification.
         * @BB10X
         * @example
         * &lt;script type="text/javascript"&gt;
         *
         * function showCustomToast() {
         *    var message = "This is my toast!",
         *        buttonText = "Click Me",
         *        onButtonSelected = function (id) {
         *           console.log('Button was clicked for toast: ' + id);
         *        },
         *        onToastDismissed = function (id) {
         *           console.log('Toast disappeared: ' + id);
         *        },
         *        toastId;
         *
         *    toastId = blackberry.ui.toast.show(message, buttonTest, onButtonSelected, onToastDismissed);
         * }
         *
         * &lt;/script&gt;
         */
        show : function(message, buttonText, buttonCallback, dismissCallback){};
};
