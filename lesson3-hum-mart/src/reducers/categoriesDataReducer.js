import {produce} from 'immer';
const categories = produce((draft,action)=>{
    return draft.value
})
export default categories;