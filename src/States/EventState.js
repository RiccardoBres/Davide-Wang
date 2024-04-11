import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    isLoading: false,
    events: [],
    error: null,
}

export const getEvents = createAsyncThunk(
    'event/getEvents',
    async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_SERVER_BASE_URL}/events`);
            return res.data;
        } catch (error) {
            throw error;
        }
    }
)


export const createEvent = createAsyncThunk(
    "event/createEvent",
    async (event) => {
        const formData = new FormData();
        formData.append("name", event.name);
        formData.append("location", event.location);
        formData.append("generalInfo", event.generalInfo);
        formData.append("date", event.date);

        if(event.images){
            for(let i = 0; i < event.images.length; i++){
                formData.append("images", event.images[i]);
                console.log(event.images[i]);

            }
        }
        try {
            const token = JSON.parse(localStorage.getItem('userLoggedIn'));
            const res = await axios.post(`${process.env.REACT_APP_SERVER_BASE_URL}/event/create`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    'Authorization': token,
                }
            });
            console.log(res.data);
            return res.data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
);



export const deleteEvent = createAsyncThunk(
    'event/deleteEvent',
    async (eventID) => {
        try {
            const token = JSON.parse(localStorage.getItem('userLoggedIn'));
            const res = await axios.delete(`${process.env.REACT_APP_SERVER_BASE_URL}/delete/event/${eventID}`, {
                headers: {
                    'Authorization': token,
                },
            });
            return res.data;
        } catch (error) {
            console.log(error);
        }
    }
);

const eventSlice = createSlice({
    name: 'eventState',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getEvents.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getEvents.fulfilled, (state, action) => {
                state.isLoading = false;
                state.events = action.payload;
                state.error = null;
            })
            .addCase(getEvents.rejected, (state) => {
                state.isLoading = false;
                state.error = "Impossibile trovare l'evento";
            })
            .addCase(createEvent.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(createEvent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.events = action.payload;
                state.error = null;
            })
            .addCase(createEvent.rejected, (state) => {
                state.isLoading = false;
                state.error = "Impossibile creare l'evento";
            })
            .addCase(deleteEvent.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(deleteEvent.fulfilled, (state, action) => {
                state.isLoading = false;
                state.events = action.payload;
                state.error = null;
            })
            .addCase(deleteEvent.rejected, (state) => {
                state.isLoading = false;
                state.error = "Impossibile eliminare l'evento";
            });
    },
});



export const allEvent = (state) => state.eventState.events;
export const isEventLoading = (state) => state.eventState.isLoading;
export const eventError = (state) => state.eventState.error;


export default eventSlice.reducer;