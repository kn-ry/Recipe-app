import { memo, VFC } from 'react'
import { Route, Switch } from 'react-router-dom'
import { AppInfo } from '../components/pages/AppInfo'
import { FavoriteRecipes } from '../components/pages/FavoriteRecipes'
import { Page404 } from '../components/pages/Page404'
import { Recipes } from '../components/pages/Recipes'
import { HeaderLayout } from '../components/templates/HeaderLayout'

export const Router: VFC = memo(() => {
    return (
        <Switch>
            <Route exact path="/">
                <HeaderLayout>
                    <Recipes />
                </HeaderLayout>
            </Route>

            <Route path="/favoriterecipes">
                <HeaderLayout>
                    <FavoriteRecipes />
                </HeaderLayout>
            </Route>
            <Route path="/appinfo">
                <HeaderLayout>
                    <AppInfo />
                </HeaderLayout>
            </Route>
            <Route path="*">
                <Page404 />
            </Route>
        </Switch>
    )
})
