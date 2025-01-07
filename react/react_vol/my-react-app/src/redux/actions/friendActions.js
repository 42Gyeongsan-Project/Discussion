export const TOGGLE_FRIEND = "FRIEND/CHANGE";

export const toggleFriend = (idx) => ({ 
    type: TOGGLE_FRIEND,
    payload: { idx },
});

export const PROFILE_FRIEND = "PROFILE/CHANGE";

export const profileFriend = () => ({
    type: PROFILE_FRIEND,
})