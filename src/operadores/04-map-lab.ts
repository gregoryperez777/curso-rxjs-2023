import { fromEvent } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const texto = document.createElement('div');

texto.innerHTML = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at ipsum cursus, ultrices turpis lobortis, congue nisi. Pellentesque aliquet, purus at lobortis rutrum, mi eros accumsan diam, in eleifend lorem urna a nulla. Sed elementum, magna sed mattis euismod, tellus sapien viverra elit, vel dignissim ante risus sit amet sapien. Pellentesque venenatis elit velit, eget condimentum eros feugiat a. Maecenas porta leo id sapien ultrices, eget placerat est porta. Nam porttitor neque lectus, ac ultricies mi laoreet nec. Praesent condimentum, elit non consequat iaculis, ex ante finibus dolor, sit amet egestas nisl dui id nisi.
    <br>
    <br>
    Sed nisi diam, sodales id massa vitae, posuere finibus nisl. Quisque eget eleifend odio. Sed ultricies lacinia elit ut pretium. Suspendisse nec risus placerat, suscipit nulla vel, varius nunc. Proin molestie rutrum ultricies. Praesent suscipit egestas rutrum. Praesent vehicula ut urna vitae vestibulum. Vestibulum et nisi iaculis, lobortis erat tincidunt, tempus neque. Pellentesque rhoncus massa id elit interdum, in dictum diam ullamcorper. Nunc pulvinar neque non laoreet convallis. Aliquam erat volutpat. Vivamus dapibus, nulla sit amet malesuada dignissim, massa ligula porttitor sem, at eleifend mi felis congue mauris. Etiam nec semper est. Proin nec justo ac arcu finibus porttitor. Nunc viverra lorem nisi, non consequat diam tempor quis. Proin at tincidunt erat.
    <br>
    <br>
    Ut vitae dignissim massa. Nullam vel mattis augue. Ut nunc ligula, tristique et scelerisque at, dapibus ut ante. Nullam quis elit in nibh tristique interdum. Donec laoreet, augue in sollicitudin faucibus, quam magna aliquam nisi, quis suscipit felis risus vitae tortor. Sed imperdiet, sem vitae varius accumsan, sapien libero rutrum tortor, in cursus ipsum eros non sapien. Nullam nunc diam, ullamcorper quis pharetra at, interdum a tellus. Duis id magna consectetur, mollis nulla et, aliquet orci. Vestibulum molestie interdum sem, a gravida purus ultricies et. Nulla varius nisi eget est scelerisque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut non justo ante. Nam quis sapien venenatis, hendrerit neque nec, consequat elit.
    <br>
    <br>
    Aenean vehicula dictum tellus, in malesuada augue molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique risus a arcu pellentesque convallis. Sed pulvinar fermentum tristique. Integer nec sem quis eros rutrum convallis a eu ipsum. Praesent scelerisque ut odio sit amet accumsan. Pellentesque eleifend lectus id purus venenatis viverra. Aliquam porta urna semper quam sollicitudin tempor. Maecenas et ipsum eget ante tincidunt venenatis a et urna. Pellentesque lobortis mauris lacinia dui imperdiet, eu laoreet purus imperdiet. Donec diam arcu, aliquam non nibh non, placerat aliquam justo. Nam quis augue nisi. Sed placerat et elit eu suscipit. Pellentesque mollis facilisis turpis eu aliquam.
    <br>
    <br>
    Morbi ut nisi id lectus fringilla imperdiet. Sed convallis in lorem vel pellentesque. Duis varius, felis in condimentum ullamcorper, nisi ante dignissim sapien, eget faucibus nulla ligula vitae turpis. In cursus at mauris viverra congue. Ut in eros mauris. Etiam ornare enim et enim facilisis, sit amet aliquam augue venenatis. Cras iaculis iaculis ipsum, sed cursus massa tincidunt ut. Proin sit amet ex ornare, dapibus est et, ultrices ligula.

    <br>
    <br>
    Sed nisi diam, sodales id massa vitae, posuere finibus nisl. Quisque eget eleifend odio. Sed ultricies lacinia elit ut pretium. Suspendisse nec risus placerat, suscipit nulla vel, varius nunc. Proin molestie rutrum ultricies. Praesent suscipit egestas rutrum. Praesent vehicula ut urna vitae vestibulum. Vestibulum et nisi iaculis, lobortis erat tincidunt, tempus neque. Pellentesque rhoncus massa id elit interdum, in dictum diam ullamcorper. Nunc pulvinar neque non laoreet convallis. Aliquam erat volutpat. Vivamus dapibus, nulla sit amet malesuada dignissim, massa ligula porttitor sem, at eleifend mi felis congue mauris. Etiam nec semper est. Proin nec justo ac arcu finibus porttitor. Nunc viverra lorem nisi, non consequat diam tempor quis. Proin at tincidunt erat.
    <br>
    <br>
    Ut vitae dignissim massa. Nullam vel mattis augue. Ut nunc ligula, tristique et scelerisque at, dapibus ut ante. Nullam quis elit in nibh tristique interdum. Donec laoreet, augue in sollicitudin faucibus, quam magna aliquam nisi, quis suscipit felis risus vitae tortor. Sed imperdiet, sem vitae varius accumsan, sapien libero rutrum tortor, in cursus ipsum eros non sapien. Nullam nunc diam, ullamcorper quis pharetra at, interdum a tellus. Duis id magna consectetur, mollis nulla et, aliquet orci. Vestibulum molestie interdum sem, a gravida purus ultricies et. Nulla varius nisi eget est scelerisque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut non justo ante. Nam quis sapien venenatis, hendrerit neque nec, consequat elit.
    <br>
    <br>
    Aenean vehicula dictum tellus, in malesuada augue molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique risus a arcu pellentesque convallis. Sed pulvinar fermentum tristique. Integer nec sem quis eros rutrum convallis a eu ipsum. Praesent scelerisque ut odio sit amet accumsan. Pellentesque eleifend lectus id purus venenatis viverra. Aliquam porta urna semper quam sollicitudin tempor. Maecenas et ipsum eget ante tincidunt venenatis a et urna. Pellentesque lobortis mauris lacinia dui imperdiet, eu laoreet purus imperdiet. Donec diam arcu, aliquam non nibh non, placerat aliquam justo. Nam quis augue nisi. Sed placerat et elit eu suscipit. Pellentesque mollis facilisis turpis eu aliquam.
    <br>
    <br>
    Morbi ut nisi id lectus fringilla imperdiet. Sed convallis in lorem vel pellentesque. Duis varius, felis in condimentum ullamcorper, nisi ante dignissim sapien, eget faucibus nulla ligula vitae turpis. In cursus at mauris viverra congue. Ut in eros mauris. Etiam ornare enim et enim facilisis, sit amet aliquam augue venenatis. Cras iaculis iaculis ipsum, sed cursus massa tincidunt ut. Proin sit amet ex ornare, dapibus est et, ultrices ligula.
    <br>
    <br>
    Sed nisi diam, sodales id massa vitae, posuere finibus nisl. Quisque eget eleifend odio. Sed ultricies lacinia elit ut pretium. Suspendisse nec risus placerat, suscipit nulla vel, varius nunc. Proin molestie rutrum ultricies. Praesent suscipit egestas rutrum. Praesent vehicula ut urna vitae vestibulum. Vestibulum et nisi iaculis, lobortis erat tincidunt, tempus neque. Pellentesque rhoncus massa id elit interdum, in dictum diam ullamcorper. Nunc pulvinar neque non laoreet convallis. Aliquam erat volutpat. Vivamus dapibus, nulla sit amet malesuada dignissim, massa ligula porttitor sem, at eleifend mi felis congue mauris. Etiam nec semper est. Proin nec justo ac arcu finibus porttitor. Nunc viverra lorem nisi, non consequat diam tempor quis. Proin at tincidunt erat.
    <br>
    <br>
    Ut vitae dignissim massa. Nullam vel mattis augue. Ut nunc ligula, tristique et scelerisque at, dapibus ut ante. Nullam quis elit in nibh tristique interdum. Donec laoreet, augue in sollicitudin faucibus, quam magna aliquam nisi, quis suscipit felis risus vitae tortor. Sed imperdiet, sem vitae varius accumsan, sapien libero rutrum tortor, in cursus ipsum eros non sapien. Nullam nunc diam, ullamcorper quis pharetra at, interdum a tellus. Duis id magna consectetur, mollis nulla et, aliquet orci. Vestibulum molestie interdum sem, a gravida purus ultricies et. Nulla varius nisi eget est scelerisque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut non justo ante. Nam quis sapien venenatis, hendrerit neque nec, consequat elit.
    <br>
    <br>
    Aenean vehicula dictum tellus, in malesuada augue molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique risus a arcu pellentesque convallis. Sed pulvinar fermentum tristique. Integer nec sem quis eros rutrum convallis a eu ipsum. Praesent scelerisque ut odio sit amet accumsan. Pellentesque eleifend lectus id purus venenatis viverra. Aliquam porta urna semper quam sollicitudin tempor. Maecenas et ipsum eget ante tincidunt venenatis a et urna. Pellentesque lobortis mauris lacinia dui imperdiet, eu laoreet purus imperdiet. Donec diam arcu, aliquam non nibh non, placerat aliquam justo. Nam quis augue nisi. Sed placerat et elit eu suscipit. Pellentesque mollis facilisis turpis eu aliquam.
    <br>
    <br>
    Morbi ut nisi id lectus fringilla imperdiet. Sed convallis in lorem vel pellentesque. Duis varius, felis in condimentum ullamcorper, nisi ante dignissim sapien, eget faucibus nulla ligula vitae turpis. In cursus at mauris viverra congue. Ut in eros mauris. Etiam ornare enim et enim facilisis, sit amet aliquam augue venenatis. Cras iaculis iaculis ipsum, sed cursus massa tincidunt ut. Proin sit amet ex ornare, dapibus est et, ultrices ligula.
    <br>
    <br>
    Sed nisi diam, sodales id massa vitae, posuere finibus nisl. Quisque eget eleifend odio. Sed ultricies lacinia elit ut pretium. Suspendisse nec risus placerat, suscipit nulla vel, varius nunc. Proin molestie rutrum ultricies. Praesent suscipit egestas rutrum. Praesent vehicula ut urna vitae vestibulum. Vestibulum et nisi iaculis, lobortis erat tincidunt, tempus neque. Pellentesque rhoncus massa id elit interdum, in dictum diam ullamcorper. Nunc pulvinar neque non laoreet convallis. Aliquam erat volutpat. Vivamus dapibus, nulla sit amet malesuada dignissim, massa ligula porttitor sem, at eleifend mi felis congue mauris. Etiam nec semper est. Proin nec justo ac arcu finibus porttitor. Nunc viverra lorem nisi, non consequat diam tempor quis. Proin at tincidunt erat.
    <br>
    <br>
    Ut vitae dignissim massa. Nullam vel mattis augue. Ut nunc ligula, tristique et scelerisque at, dapibus ut ante. Nullam quis elit in nibh tristique interdum. Donec laoreet, augue in sollicitudin faucibus, quam magna aliquam nisi, quis suscipit felis risus vitae tortor. Sed imperdiet, sem vitae varius accumsan, sapien libero rutrum tortor, in cursus ipsum eros non sapien. Nullam nunc diam, ullamcorper quis pharetra at, interdum a tellus. Duis id magna consectetur, mollis nulla et, aliquet orci. Vestibulum molestie interdum sem, a gravida purus ultricies et. Nulla varius nisi eget est scelerisque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut non justo ante. Nam quis sapien venenatis, hendrerit neque nec, consequat elit.
    <br>
    <br>
    Aenean vehicula dictum tellus, in malesuada augue molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique risus a arcu pellentesque convallis. Sed pulvinar fermentum tristique. Integer nec sem quis eros rutrum convallis a eu ipsum. Praesent scelerisque ut odio sit amet accumsan. Pellentesque eleifend lectus id purus venenatis viverra. Aliquam porta urna semper quam sollicitudin tempor. Maecenas et ipsum eget ante tincidunt venenatis a et urna. Pellentesque lobortis mauris lacinia dui imperdiet, eu laoreet purus imperdiet. Donec diam arcu, aliquam non nibh non, placerat aliquam justo. Nam quis augue nisi. Sed placerat et elit eu suscipit. Pellentesque mollis facilisis turpis eu aliquam.
    <br>
    <br>
    Morbi ut nisi id lectus fringilla imperdiet. Sed convallis in lorem vel pellentesque. Duis varius, felis in condimentum ullamcorper, nisi ante dignissim sapien, eget faucibus nulla ligula vitae turpis. In cursus at mauris viverra congue. Ut in eros mauris. Etiam ornare enim et enim facilisis, sit amet aliquam augue venenatis. Cras iaculis iaculis ipsum, sed cursus massa tincidunt ut. Proin sit amet ex ornare, dapibus est et, ultrices ligula.
    <br>
    <br>
    Sed nisi diam, sodales id massa vitae, posuere finibus nisl. Quisque eget eleifend odio. Sed ultricies lacinia elit ut pretium. Suspendisse nec risus placerat, suscipit nulla vel, varius nunc. Proin molestie rutrum ultricies. Praesent suscipit egestas rutrum. Praesent vehicula ut urna vitae vestibulum. Vestibulum et nisi iaculis, lobortis erat tincidunt, tempus neque. Pellentesque rhoncus massa id elit interdum, in dictum diam ullamcorper. Nunc pulvinar neque non laoreet convallis. Aliquam erat volutpat. Vivamus dapibus, nulla sit amet malesuada dignissim, massa ligula porttitor sem, at eleifend mi felis congue mauris. Etiam nec semper est. Proin nec justo ac arcu finibus porttitor. Nunc viverra lorem nisi, non consequat diam tempor quis. Proin at tincidunt erat.
    <br>
    <br>
    Ut vitae dignissim massa. Nullam vel mattis augue. Ut nunc ligula, tristique et scelerisque at, dapibus ut ante. Nullam quis elit in nibh tristique interdum. Donec laoreet, augue in sollicitudin faucibus, quam magna aliquam nisi, quis suscipit felis risus vitae tortor. Sed imperdiet, sem vitae varius accumsan, sapien libero rutrum tortor, in cursus ipsum eros non sapien. Nullam nunc diam, ullamcorper quis pharetra at, interdum a tellus. Duis id magna consectetur, mollis nulla et, aliquet orci. Vestibulum molestie interdum sem, a gravida purus ultricies et. Nulla varius nisi eget est scelerisque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut non justo ante. Nam quis sapien venenatis, hendrerit neque nec, consequat elit.
    <br>
    <br>
    Aenean vehicula dictum tellus, in malesuada augue molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique risus a arcu pellentesque convallis. Sed pulvinar fermentum tristique. Integer nec sem quis eros rutrum convallis a eu ipsum. Praesent scelerisque ut odio sit amet accumsan. Pellentesque eleifend lectus id purus venenatis viverra. Aliquam porta urna semper quam sollicitudin tempor. Maecenas et ipsum eget ante tincidunt venenatis a et urna. Pellentesque lobortis mauris lacinia dui imperdiet, eu laoreet purus imperdiet. Donec diam arcu, aliquam non nibh non, placerat aliquam justo. Nam quis augue nisi. Sed placerat et elit eu suscipit. Pellentesque mollis facilisis turpis eu aliquam.
    <br>
    <br>
    Morbi ut nisi id lectus fringilla imperdiet. Sed convallis in lorem vel pellentesque. Duis varius, felis in condimentum ullamcorper, nisi ante dignissim sapien, eget faucibus nulla ligula vitae turpis. In cursus at mauris viverra congue. Ut in eros mauris. Etiam ornare enim et enim facilisis, sit amet aliquam augue venenatis. Cras iaculis iaculis ipsum, sed cursus massa tincidunt ut. Proin sit amet ex ornare, dapibus est et, ultrices ligula.
    <br>
    <br>
    Sed nisi diam, sodales id massa vitae, posuere finibus nisl. Quisque eget eleifend odio. Sed ultricies lacinia elit ut pretium. Suspendisse nec risus placerat, suscipit nulla vel, varius nunc. Proin molestie rutrum ultricies. Praesent suscipit egestas rutrum. Praesent vehicula ut urna vitae vestibulum. Vestibulum et nisi iaculis, lobortis erat tincidunt, tempus neque. Pellentesque rhoncus massa id elit interdum, in dictum diam ullamcorper. Nunc pulvinar neque non laoreet convallis. Aliquam erat volutpat. Vivamus dapibus, nulla sit amet malesuada dignissim, massa ligula porttitor sem, at eleifend mi felis congue mauris. Etiam nec semper est. Proin nec justo ac arcu finibus porttitor. Nunc viverra lorem nisi, non consequat diam tempor quis. Proin at tincidunt erat.
    <br>
    <br>
    Ut vitae dignissim massa. Nullam vel mattis augue. Ut nunc ligula, tristique et scelerisque at, dapibus ut ante. Nullam quis elit in nibh tristique interdum. Donec laoreet, augue in sollicitudin faucibus, quam magna aliquam nisi, quis suscipit felis risus vitae tortor. Sed imperdiet, sem vitae varius accumsan, sapien libero rutrum tortor, in cursus ipsum eros non sapien. Nullam nunc diam, ullamcorper quis pharetra at, interdum a tellus. Duis id magna consectetur, mollis nulla et, aliquet orci. Vestibulum molestie interdum sem, a gravida purus ultricies et. Nulla varius nisi eget est scelerisque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut non justo ante. Nam quis sapien venenatis, hendrerit neque nec, consequat elit.
    <br>
    <br>
    Aenean vehicula dictum tellus, in malesuada augue molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique risus a arcu pellentesque convallis. Sed pulvinar fermentum tristique. Integer nec sem quis eros rutrum convallis a eu ipsum. Praesent scelerisque ut odio sit amet accumsan. Pellentesque eleifend lectus id purus venenatis viverra. Aliquam porta urna semper quam sollicitudin tempor. Maecenas et ipsum eget ante tincidunt venenatis a et urna. Pellentesque lobortis mauris lacinia dui imperdiet, eu laoreet purus imperdiet. Donec diam arcu, aliquam non nibh non, placerat aliquam justo. Nam quis augue nisi. Sed placerat et elit eu suscipit. Pellentesque mollis facilisis turpis eu aliquam.
    <br>
    <br>
    Morbi ut nisi id lectus fringilla imperdiet. Sed convallis in lorem vel pellentesque. Duis varius, felis in condimentum ullamcorper, nisi ante dignissim sapien, eget faucibus nulla ligula vitae turpis. In cursus at mauris viverra congue. Ut in eros mauris. Etiam ornare enim et enim facilisis, sit amet aliquam augue venenatis. Cras iaculis iaculis ipsum, sed cursus massa tincidunt ut. Proin sit amet ex ornare, dapibus est et, ultrices ligula.
    <br>
    <br>
    Sed nisi diam, sodales id massa vitae, posuere finibus nisl. Quisque eget eleifend odio. Sed ultricies lacinia elit ut pretium. Suspendisse nec risus placerat, suscipit nulla vel, varius nunc. Proin molestie rutrum ultricies. Praesent suscipit egestas rutrum. Praesent vehicula ut urna vitae vestibulum. Vestibulum et nisi iaculis, lobortis erat tincidunt, tempus neque. Pellentesque rhoncus massa id elit interdum, in dictum diam ullamcorper. Nunc pulvinar neque non laoreet convallis. Aliquam erat volutpat. Vivamus dapibus, nulla sit amet malesuada dignissim, massa ligula porttitor sem, at eleifend mi felis congue mauris. Etiam nec semper est. Proin nec justo ac arcu finibus porttitor. Nunc viverra lorem nisi, non consequat diam tempor quis. Proin at tincidunt erat.
    <br>
    <br>
    Ut vitae dignissim massa. Nullam vel mattis augue. Ut nunc ligula, tristique et scelerisque at, dapibus ut ante. Nullam quis elit in nibh tristique interdum. Donec laoreet, augue in sollicitudin faucibus, quam magna aliquam nisi, quis suscipit felis risus vitae tortor. Sed imperdiet, sem vitae varius accumsan, sapien libero rutrum tortor, in cursus ipsum eros non sapien. Nullam nunc diam, ullamcorper quis pharetra at, interdum a tellus. Duis id magna consectetur, mollis nulla et, aliquet orci. Vestibulum molestie interdum sem, a gravida purus ultricies et. Nulla varius nisi eget est scelerisque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut non justo ante. Nam quis sapien venenatis, hendrerit neque nec, consequat elit.
    <br>
    <br>
    Aenean vehicula dictum tellus, in malesuada augue molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique risus a arcu pellentesque convallis. Sed pulvinar fermentum tristique. Integer nec sem quis eros rutrum convallis a eu ipsum. Praesent scelerisque ut odio sit amet accumsan. Pellentesque eleifend lectus id purus venenatis viverra. Aliquam porta urna semper quam sollicitudin tempor. Maecenas et ipsum eget ante tincidunt venenatis a et urna. Pellentesque lobortis mauris lacinia dui imperdiet, eu laoreet purus imperdiet. Donec diam arcu, aliquam non nibh non, placerat aliquam justo. Nam quis augue nisi. Sed placerat et elit eu suscipit. Pellentesque mollis facilisis turpis eu aliquam.
    <br>
    <br>
    Morbi ut nisi id lectus fringilla imperdiet. Sed convallis in lorem vel pellentesque. Duis varius, felis in condimentum ullamcorper, nisi ante dignissim sapien, eget faucibus nulla ligula vitae turpis. In cursus at mauris viverra congue. Ut in eros mauris. Etiam ornare enim et enim facilisis, sit amet aliquam augue venenatis. Cras iaculis iaculis ipsum, sed cursus massa tincidunt ut. Proin sit amet ex ornare, dapibus est et, ultrices ligula.
    <br>
    <br>
    Sed nisi diam, sodales id massa vitae, posuere finibus nisl. Quisque eget eleifend odio. Sed ultricies lacinia elit ut pretium. Suspendisse nec risus placerat, suscipit nulla vel, varius nunc. Proin molestie rutrum ultricies. Praesent suscipit egestas rutrum. Praesent vehicula ut urna vitae vestibulum. Vestibulum et nisi iaculis, lobortis erat tincidunt, tempus neque. Pellentesque rhoncus massa id elit interdum, in dictum diam ullamcorper. Nunc pulvinar neque non laoreet convallis. Aliquam erat volutpat. Vivamus dapibus, nulla sit amet malesuada dignissim, massa ligula porttitor sem, at eleifend mi felis congue mauris. Etiam nec semper est. Proin nec justo ac arcu finibus porttitor. Nunc viverra lorem nisi, non consequat diam tempor quis. Proin at tincidunt erat.
    <br>
    <br>
    Ut vitae dignissim massa. Nullam vel mattis augue. Ut nunc ligula, tristique et scelerisque at, dapibus ut ante. Nullam quis elit in nibh tristique interdum. Donec laoreet, augue in sollicitudin faucibus, quam magna aliquam nisi, quis suscipit felis risus vitae tortor. Sed imperdiet, sem vitae varius accumsan, sapien libero rutrum tortor, in cursus ipsum eros non sapien. Nullam nunc diam, ullamcorper quis pharetra at, interdum a tellus. Duis id magna consectetur, mollis nulla et, aliquet orci. Vestibulum molestie interdum sem, a gravida purus ultricies et. Nulla varius nisi eget est scelerisque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut non justo ante. Nam quis sapien venenatis, hendrerit neque nec, consequat elit.
    <br>
    <br>
    Aenean vehicula dictum tellus, in malesuada augue molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique risus a arcu pellentesque convallis. Sed pulvinar fermentum tristique. Integer nec sem quis eros rutrum convallis a eu ipsum. Praesent scelerisque ut odio sit amet accumsan. Pellentesque eleifend lectus id purus venenatis viverra. Aliquam porta urna semper quam sollicitudin tempor. Maecenas et ipsum eget ante tincidunt venenatis a et urna. Pellentesque lobortis mauris lacinia dui imperdiet, eu laoreet purus imperdiet. Donec diam arcu, aliquam non nibh non, placerat aliquam justo. Nam quis augue nisi. Sed placerat et elit eu suscipit. Pellentesque mollis facilisis turpis eu aliquam.
    <br>
    <br>
    Morbi ut nisi id lectus fringilla imperdiet. Sed convallis in lorem vel pellentesque. Duis varius, felis in condimentum ullamcorper, nisi ante dignissim sapien, eget faucibus nulla ligula vitae turpis. In cursus at mauris viverra congue. Ut in eros mauris. Etiam ornare enim et enim facilisis, sit amet aliquam augue venenatis. Cras iaculis iaculis ipsum, sed cursus massa tincidunt ut. Proin sit amet ex ornare, dapibus est et, ultrices ligula.
    <br>
    <br>
    Sed nisi diam, sodales id massa vitae, posuere finibus nisl. Quisque eget eleifend odio. Sed ultricies lacinia elit ut pretium. Suspendisse nec risus placerat, suscipit nulla vel, varius nunc. Proin molestie rutrum ultricies. Praesent suscipit egestas rutrum. Praesent vehicula ut urna vitae vestibulum. Vestibulum et nisi iaculis, lobortis erat tincidunt, tempus neque. Pellentesque rhoncus massa id elit interdum, in dictum diam ullamcorper. Nunc pulvinar neque non laoreet convallis. Aliquam erat volutpat. Vivamus dapibus, nulla sit amet malesuada dignissim, massa ligula porttitor sem, at eleifend mi felis congue mauris. Etiam nec semper est. Proin nec justo ac arcu finibus porttitor. Nunc viverra lorem nisi, non consequat diam tempor quis. Proin at tincidunt erat.
    <br>
    <br>
    Ut vitae dignissim massa. Nullam vel mattis augue. Ut nunc ligula, tristique et scelerisque at, dapibus ut ante. Nullam quis elit in nibh tristique interdum. Donec laoreet, augue in sollicitudin faucibus, quam magna aliquam nisi, quis suscipit felis risus vitae tortor. Sed imperdiet, sem vitae varius accumsan, sapien libero rutrum tortor, in cursus ipsum eros non sapien. Nullam nunc diam, ullamcorper quis pharetra at, interdum a tellus. Duis id magna consectetur, mollis nulla et, aliquet orci. Vestibulum molestie interdum sem, a gravida purus ultricies et. Nulla varius nisi eget est scelerisque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut non justo ante. Nam quis sapien venenatis, hendrerit neque nec, consequat elit.
    <br>
    <br>
    Aenean vehicula dictum tellus, in malesuada augue molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique risus a arcu pellentesque convallis. Sed pulvinar fermentum tristique. Integer nec sem quis eros rutrum convallis a eu ipsum. Praesent scelerisque ut odio sit amet accumsan. Pellentesque eleifend lectus id purus venenatis viverra. Aliquam porta urna semper quam sollicitudin tempor. Maecenas et ipsum eget ante tincidunt venenatis a et urna. Pellentesque lobortis mauris lacinia dui imperdiet, eu laoreet purus imperdiet. Donec diam arcu, aliquam non nibh non, placerat aliquam justo. Nam quis augue nisi. Sed placerat et elit eu suscipit. Pellentesque mollis facilisis turpis eu aliquam.
    <br>
    <br>
    Morbi ut nisi id lectus fringilla imperdiet. Sed convallis in lorem vel pellentesque. Duis varius, felis in condimentum ullamcorper, nisi ante dignissim sapien, eget faucibus nulla ligula vitae turpis. In cursus at mauris viverra congue. Ut in eros mauris. Etiam ornare enim et enim facilisis, sit amet aliquam augue venenatis. Cras iaculis iaculis ipsum, sed cursus massa tincidunt ut. Proin sit amet ex ornare, dapibus est et, ultrices ligula.
    <br>
    <br>
    Sed nisi diam, sodales id massa vitae, posuere finibus nisl. Quisque eget eleifend odio. Sed ultricies lacinia elit ut pretium. Suspendisse nec risus placerat, suscipit nulla vel, varius nunc. Proin molestie rutrum ultricies. Praesent suscipit egestas rutrum. Praesent vehicula ut urna vitae vestibulum. Vestibulum et nisi iaculis, lobortis erat tincidunt, tempus neque. Pellentesque rhoncus massa id elit interdum, in dictum diam ullamcorper. Nunc pulvinar neque non laoreet convallis. Aliquam erat volutpat. Vivamus dapibus, nulla sit amet malesuada dignissim, massa ligula porttitor sem, at eleifend mi felis congue mauris. Etiam nec semper est. Proin nec justo ac arcu finibus porttitor. Nunc viverra lorem nisi, non consequat diam tempor quis. Proin at tincidunt erat.
    <br>
    <br>
    Ut vitae dignissim massa. Nullam vel mattis augue. Ut nunc ligula, tristique et scelerisque at, dapibus ut ante. Nullam quis elit in nibh tristique interdum. Donec laoreet, augue in sollicitudin faucibus, quam magna aliquam nisi, quis suscipit felis risus vitae tortor. Sed imperdiet, sem vitae varius accumsan, sapien libero rutrum tortor, in cursus ipsum eros non sapien. Nullam nunc diam, ullamcorper quis pharetra at, interdum a tellus. Duis id magna consectetur, mollis nulla et, aliquet orci. Vestibulum molestie interdum sem, a gravida purus ultricies et. Nulla varius nisi eget est scelerisque mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut non justo ante. Nam quis sapien venenatis, hendrerit neque nec, consequat elit.
    <br>
    <br>
    Aenean vehicula dictum tellus, in malesuada augue molestie et. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin tristique risus a arcu pellentesque convallis. Sed pulvinar fermentum tristique. Integer nec sem quis eros rutrum convallis a eu ipsum. Praesent scelerisque ut odio sit amet accumsan. Pellentesque eleifend lectus id purus venenatis viverra. Aliquam porta urna semper quam sollicitudin tempor. Maecenas et ipsum eget ante tincidunt venenatis a et urna. Pellentesque lobortis mauris lacinia dui imperdiet, eu laoreet purus imperdiet. Donec diam arcu, aliquam non nibh non, placerat aliquam justo. Nam quis augue nisi. Sed placerat et elit eu suscipit. Pellentesque mollis facilisis turpis eu aliquam.
    <br>
    <br>
    Morbi ut nisi id lectus fringilla imperdiet. Sed convallis in lorem vel pellentesque. Duis varius, felis in condimentum ullamcorper, nisi ante dignissim sapien, eget faucibus nulla ligula vitae turpis. In cursus at mauris viverra congue. Ut in eros mauris. Etiam ornare enim et enim facilisis, sit amet aliquam augue venenatis. Cras iaculis iaculis ipsum, sed cursus massa tincidunt ut. Proin sit amet ex ornare, dapibus est et, ultrices ligula.

`;

const body = document.querySelector('body');
body.append(texto);

const progressBar = document.createElement('div'); 

progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);

// funcion que haga el calculo
const calcularPorcentajeScroll = (event) => {

    

    /***   
     *  Notas
     * 
     *  clientHeight: el ancho de lo que podemos deplegar en la pantalla sin hacer scroll
     *  _____________
     *  |           |       |
     *  |           |       |
     *  |           |       |
     *  |___________|     350px
     * 
     *  scrollHeight: todo el contenido html de la pagina sobre el cual el usuario puede hacer scroll en él
     *  
     *  _____________
     * |            |     800px
     * |            |       |
     * |            |       |
     * |            |       |
     * |            |       |
     * |            |       |
     * |____________|       |
     * 
     *  scrollTop: posicion en la nos encontramos en relacion al top 
     * 
     *  Formula 
     * 
     *  (Total del contenido html)          (Lo que podemos mostrar)
     *         clientHeight            -           scrollHeight         =   Pixeles para hacer scroll 
     *              800px              -                 350px          =    450px
     * 
     *  (scrollTop / (clientHeight - scrollHeight)) * 100 = porcentaje sobre el cual se ha hecho scroll
     * */

    // como se puede hacer
    // const {
    //     target: { documentElement: { scrollTop, scrollHeight, clientHeight } }
    // } = event;

    const {
        scrollTop, 
        scrollHeight, 
        clientHeight
    } = event.target.documentElement;

    return (scrollTop/(scrollHeight - clientHeight)) * 100;
}

// Streams
const scroll$ = fromEvent<Event>(document, 'scroll');

const progress$ = scroll$.pipe(
    // lo de abajo es equivalente a esto
    // map(event => calcularPorcentajeScroll(event))

    map(calcularPorcentajeScroll),
    tap(console.log)
);

progress$.subscribe( porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});