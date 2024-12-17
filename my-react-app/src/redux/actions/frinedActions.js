export const TOGGLE_FRIEND = "FRIEND/CHANGE";

export const toggleFriend = (idx) => ({ 
    type: TOGGLE_FRIEND,
    payload: { idx },
});
