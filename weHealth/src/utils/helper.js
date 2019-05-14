
export function validEmail(email){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

export function validPassword(password){
    if(password.length < 6){
        return false
    }
    return true;
}

    // Function to call the API, POST request
export const post_request = async (url, user_data) => {
        console.log(user_data)
        const rawResponse = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user_data)
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;
    };

    // Function to UPDATE
    export const put_request = async (url, data) => {
        const rawResponse = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;
    };

    export const delete_request = async (url, data) => {
        const rawResponse = await fetch(url, {
            method: 'delete',
            mode : "cors",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        const content = await rawResponse.json();
        console.log(content);
        return content;
    };
    
    //delete Data
    // export function deleteData(url) {
    //     return fetch(url, {
    //       method: 'delete'
    //     })
    //     .then(response => {
    //     console.log(response.json(), response.status, response.statusText);
    //     return response.json();
    //     })
    //     .catch((err) => (console.log(err)))
    //   }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    export const get_request = async (url) => {
        try{
            const response = await fetch(url);
            const body = await response.json();
            return body;
        }
        catch(err){
            console.log(err);
        }
    };
    
    
    const monthName = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN",
                    "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

      export function millisecondsToCompleteDate(ms){
        let milliseconds = parseInt(ms, 10);

        let time = new Date(milliseconds);
        let obj = {
            date : time.getDate(),
            month : monthName[time.getMonth()],
            year : time.getFullYear()
        }
        console.log(obj)
        return obj.date + ' ' + obj.month + ', ' + obj.year;
    }

    export function millisecondsToMonth(ms){
        let milliseconds = parseInt(ms, 10);
        let time = new Date(milliseconds);
return monthName[time.getMonth()]
    }

    export function millisecondsToDate(ms){
        let milliseconds = parseInt(ms, 10);
        let time = new Date(milliseconds);
return time.getDate()
    }

    export function millisecondsToDay(ms){
        const dayName = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        let milliseconds = parseInt(ms, 10);
        let time = new Date(milliseconds);
        // console.log( time.getDay())
        return dayName[time.getDay()]
    }