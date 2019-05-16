import React from 'react'
import { LoginConsumer } from "../../config/contextConfig.js";
import Recieve from './Recieve'

export default React.forwardRef((props, ref) => (
    <LoginConsumer>
        {({ uid }) => <Recieve {...props} uid={uid}  />}
    </LoginConsumer>
));