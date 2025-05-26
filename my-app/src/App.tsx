import './App.css'
import AppRoutes from './routes/app.routes'

import { ConfigProvider } from 'antd'

const tabsConfig = {
  inkBarColor: '#665B85',
  itemActiveColor: '#C1B9D8',
  itemHoverColor: '#8176A0',
  itemSelectedColor: '#665B85',
  itemColor: '#FFFFFF',  
}

function App() {
  return (
    <>
      <ConfigProvider
        theme={{
          components: {
            Tabs: {
              ...tabsConfig
            }
          },
          token: {
            colorBorderSecondary: '#181818'
          }
        }}
      >
        <AppRoutes/>
      </ConfigProvider>
    </>
  )
}

export default App
