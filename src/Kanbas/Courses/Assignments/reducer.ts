import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  assignments: []
};
const assignmentsSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        
        setAssignments: (state, action) => {
          state.assignments = action.payload;
        },

        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: new Date().getTime().toString(),
                title: assignment.title,
                course: assignment.course,
                available_date: assignment.available_date,
                available_time: assignment.available_time,
                until_date: assignment.until_date,
                until_time: assignment.until_time,
                due_date: assignment.due_date,
                due_time: assignment.due_time,
                score: assignment.score,
                desciption: assignment.desciption,
                group: assignment.group
            };
            state.assignments = [...state.assignments, newAssignment] as any;
        },

        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter(
                (a: any) => a._id !== assignmentId
            );
        },

        updateAssignment: (state, { payload: assignment }) => {
            state.assignments = state.assignments.map(
              (a: any) => a._id === assignment._id ? assignment : a
            ) as any;
        },

        editAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.map(
                (a: any) => a._id === assignmentId ? { ...a, editing: true } : a
            ) as any;
        },
    },
});
export const { addAssignment, deleteAssignment, updateAssignment, editAssignment, setAssignments } =
    assignmentsSlice.actions;
export default assignmentsSlice.reducer;