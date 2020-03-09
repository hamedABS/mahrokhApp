import {createStackNavigator} from "react-navigation-stack";
import Blog from "../forms/blog/Blog";
import BlogArticle from "../forms/blog/BlogArticle";

const BlogStack = createStackNavigator({
    Blog: Blog,
    BlogArticle: BlogArticle,
}, {
    initialRouteName: 'Blog'
})

BlogStack.navigationOptions = ({navigation}) => {
    let tabBarVisible = true;
    let routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName == 'BlogArticle') {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
    }
}

export default BlogStack;
