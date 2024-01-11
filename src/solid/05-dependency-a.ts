import { PostService } from './05-dependency-b';
import { JsonDataBaseServices, LocalDataBaseService, WebApiPostServices } from './05-dependency-c';


// Main
(async () => {

    const provider = new WebApiPostServices();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();