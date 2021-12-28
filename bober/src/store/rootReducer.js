import {combineReducers} from 'redux'
import authReducer from '../auth/authReducer'
import contractReducer from '../Features/Contracts/ContractDashboard/redux/contractReducer'
import testReducer from '../Features/Sandbox/TestReducer'
import { globalReducer } from './global-state/globalReducer'


const rootReducer = combineReducers({
    test: testReducer,
    contract: contractReducer,
    auth: authReducer,
    global: globalReducer
})

export default rootReducer