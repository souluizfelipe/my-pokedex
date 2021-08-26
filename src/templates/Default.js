

import Header from '../partials/Header'

const TemplateDefault = ({ children }) => {
  return(
    <>
      <Header />
      {children}
    </>
  )
}

export default TemplateDefault