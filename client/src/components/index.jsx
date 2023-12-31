import React from 'react';


const Home = ({ isLoggedIn, loggedInUser }) => {
  

  return (
    
      <div className="container">
        {isLoggedIn ? (
          <h1>Witaj, {loggedInUser}!</h1>
        ) : (
          <h1>Witaj</h1>
        )}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra eros risus, sed gravida turpis finibus ac. Praesent a mollis dolor, id cursus lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec eget rutrum sem, vel congue velit. Vestibulum eu ante at elit commodo efficitur. Maecenas ut ligula a quam tincidunt laoreet non et lacus. Praesent magna justo, volutpat eu convallis vel, egestas eget mauris. Quisque vestibulum mauris non felis tristique, quis pellentesque lacus tincidunt. Etiam blandit quis felis sed ultricies. In justo nisl, scelerisque dictum tellus vitae, faucibus ornare justo. Nam ut felis dignissim, aliquam ex vel, iaculis nulla.</p>
        <p>Nam molestie tempus erat, a lacinia mi imperdiet eu. Phasellus faucibus velit non varius gravida. Fusce eu quam ultricies magna scelerisque tempus. Vestibulum non accumsan felis. Mauris lacinia mollis tortor, eu porta ex eleifend sit amet. Phasellus condimentum elit rhoncus nisi bibendum dignissim. Pellentesque et massa id tortor tristique laoreet. Vivamus varius dignissim mauris, quis malesuada sem varius interdum. Etiam non magna aliquam, mollis risus quis, interdum justo. Aenean sollicitudin lacus eros, euismod feugiat erat rhoncus ac. Curabitur a nisl dui.</p>
        <p>Sed fermentum purus sapien, at porttitor risus mollis ut. Vivamus hendrerit vehicula odio, sit amet fringilla tellus bibendum quis. Donec id eros tincidunt, gravida augue pellentesque, congue elit. Aliquam aliquet scelerisque turpis, vel eleifend massa semper et. Maecenas et blandit sapien, venenatis scelerisque mauris. Nam rhoncus gravida enim, ac ornare dui vulputate eu. Nam libero dolor, ultricies et erat non, fringilla porta arcu. Ut vel erat vulputate diam bibendum aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin auctor ante aliquet pellentesque fermentum. In mi eros, volutpat sit amet elit lacinia, porttitor placerat dolor. Aliquam nisl tortor, imperdiet eget nulla eget, semper vehicula lacus. Sed consequat condimentum interdum.</p>
        <p>Aliquam cursus vel ex a semper. Maecenas id sem vulputate, hendrerit sem ut, lacinia erat. Duis luctus nulla eu urna interdum porttitor. Curabitur laoreet, massa eu mollis pharetra, ipsum ipsum convallis massa, sit amet ornare dui metus id velit. Cras ullamcorper, leo in pretium suscipit, lacus lacus elementum magna, dapibus maximus est ipsum sed ex. Nullam pretium leo vel leo suscipit efficitur. Aliquam tempor metus imperdiet turpis aliquet, sit amet sodales mauris tincidunt. Aliquam id ex et massa lobortis placerat.</p>
        <p>Aliquam consectetur ultrices diam, a facilisis erat mattis a. In hendrerit, nisi ac elementum aliquam, odio risus egestas neque, ac consectetur arcu ante id erat. Vivamus tincidunt nulla vitae neque tristique, eu laoreet dolor semper. Nulla sed diam vel dui sodales rutrum id et eros. Nunc elementum arcu eget sapien sagittis faucibus. Suspendisse potenti. Quisque accumsan pretium est id feugiat. Donec non risus ut leo pretium posuere at nec augue. Curabitur sit amet leo gravida, fringilla urna eu, maximus nulla. Aenean ac elit eget nunc consectetur commodo et quis turpis. Phasellus erat libero, tempor id risus ut, fringilla dapibus ante. Suspendisse potenti. Nam hendrerit auctor felis, feugiat condimentum justo commodo vel. Cras dictum pharetra odio, nec tincidunt risus.</p>
      </div>
     
  );
  
};

export default Home;
