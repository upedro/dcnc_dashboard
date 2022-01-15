import React from 'react'
import { CapsuleTabs } from 'antd-mobile'

export default function Home() {


    return (
        <div>
        <CapsuleTabs>
          <CapsuleTabs.Tab title='水果' key='fruits'>
            菠萝
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='蔬菜' key='vegetables'>
            西红柿
          </CapsuleTabs.Tab>
          <CapsuleTabs.Tab title='动物' key='animals'>
            蚂蚁
          </CapsuleTabs.Tab>
        </CapsuleTabs>
        <div>

        </div>

        <CapsuleTabs>
          <CapsuleTabs.Tab title='水果' key='fruits' />
          <CapsuleTabs.Tab title='蔬菜' key='vegetables' />
          <CapsuleTabs.Tab title='动物' key='animals' />
        </CapsuleTabs>

        
        </div>
    )
}
