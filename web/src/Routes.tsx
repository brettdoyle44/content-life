// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Private, Set } from '@redwoodjs/router'
import CoreLayout from 'src/layouts/CoreLayout'
import AuthLayout from 'src/layouts/AuthLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Set wrap={AuthLayout}>
        <Route path="/signin" page={SigninPage} name="signin" />
      </Set>
      <Private unauthenticated="home">
        <Set wrap={CoreLayout}>
          <Route path="/dashboard/{id:string}" page={DashboardPage} name="dashboard" />
          <Route path="/storyboard/new" page={CreateStoryboardPage} name="createStoryboard" />
          <Route path="/storyboard/{id:string}" page={StoryboardPage} name="storyboard" />
        </Set>
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
