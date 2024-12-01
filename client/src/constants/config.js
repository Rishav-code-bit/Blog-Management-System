// API MESSAGES 
export const API_NOTIFICATION_MESSAGES = {
    loading: {
        title: "loading...",
        message: 'data is being loaded, please wait'
    },
    sucess: {
        title: 'success',
        message: 'Data sucessfuly loaded'
    },
    responseFailure:{
        title: 'Error',
        message: 'An error occured while fetching response from the server. PLease try again'
    },
    requestFailure:{
        title: 'Error',
        message: 'An error occured while parsing request data'
    },
    networrkError: {
        title: 'Error',
        message: 'Unable to connect to network'
    }
}

export const SERVICE_URLS = {
    userSignup: {url: '/signup', method: 'POST'}
}