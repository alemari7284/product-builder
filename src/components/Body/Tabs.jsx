import Content from './Content'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import Models from './Models'

export default () => (
  <Tabs focusTabOnClick={false}>
    <TabList>
      <Tab>Models</Tab>
      <Tab>Colors</Tab>
      <Tab>Accessories</Tab>
      <Tab>Summary</Tab>
    </TabList>

    <TabPanel>
      <Models />
    </TabPanel>
    <TabPanel>
      <h2>Any content 2</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 3</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 4</h2>
    </TabPanel>
  </Tabs>
)
