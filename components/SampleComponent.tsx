import React, { useEffect } from 'react'
import Link from 'next/link'
import { observer } from 'mobx-react-lite'
import { StyledEngineProvider } from '@mui/material/styles';
import { IStore, useStore } from '../store'
import { Layout } from './Layout';
import Clock from './Clock'


interface IOwnProps {
  store?: IStore
  title: string
  linkTo: string
}

const SampleComponent: React.FC<IOwnProps> = observer((props) => {
  const { lastUpdate, light, start, stop } = useStore(props.store)

  useEffect(() => {
    start()
    return () => {
      stop()
    }
  }, [start, stop])

  return (
    <div>
      <h1>{props.title}</h1>
      <Clock lastUpdate={lastUpdate} light={light} />
      <nav>
        <Link href={props.linkTo}>
          <a>Navigate</a>
        </Link>
      </nav>
      <StyledEngineProvider injectFirst>
        <Layout />
      </StyledEngineProvider>

    </div>
  )
})

export default SampleComponent
