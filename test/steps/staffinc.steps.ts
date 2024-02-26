import {Given, When, Then} from "@cucumber/cucumber"
import staffincPage from "src/pages/staffinc.page";
import assertions from 'src/utils/assertions';
import { addLog } from 'src/utils/commands';


When(/^I click on mandatory$/, async()=> {
    await staffincPage.setlocation()
    
})
