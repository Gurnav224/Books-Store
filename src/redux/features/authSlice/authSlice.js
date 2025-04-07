import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const signUpAsync = createAsyncThunk("auth/sign", async ({ userName, email, password }, { rejectWithValue }) => {
    console.log('dispatch signup data', {userName, email, password})
    try {
        const response = await fetch('https://book-store-backend-red.vercel.app/auth/signup', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                userName,
                email,
                password
            })
        })
        const data = await response.json();
        console.log('api response ', data)
        return data
    }
    catch (error) {
        return rejectWithValue(error);
    }
})

const initialState = {
    token: localStorage.getItem('token') || null,
    user: null,
    status: 'idle',
    error: null
}


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(signUpAsync.pending, (state) => {
            state.status = 'loading'
        })
        builder.addCase(signUpAsync.fulfilled, (state, action) => {
            state.status = 'secceeded',
            state.token = action.payload
        })
        builder.addCase(signUpAsync.rejected, (state, action) => {
            state.status = 'failed',
            state.error = action.payload
        })
    }
})

export default authSlice.reducer;