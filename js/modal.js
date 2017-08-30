//Charmander
    
$.ajax({ 
   type: "GET",
   dataType: "json",
   url: "https://pokeapi.co/api/v2/pokemon/4",
   success: function(data){        
       console.log(data);
       
       
$( "#charName" ).replaceWith( data.name );

$( "#charID" ).replaceWith( data.id );

$( "#charType" ).replaceWith( data.types[0].type.name );

$( "#charXP" ).replaceWith( data.base_experience );

$("#charImg").attr('src', data.sprites.front_default );


   }
});

// https://jsfiddle.net/vxf7rg0L/68/

//Squirtle

$.ajax({ 
   type: "GET",
   dataType: "json",
   url: "https://pokeapi.co/api/v2/pokemon/7",
   success: function(data){        
       console.log(data);
       
       
$( "#squirtName" ).replaceWith( data.name );

$( "#squirtID" ).replaceWith( data.id );

$( "#squirtType" ).replaceWith( data.types[0].type.name );

$( "#squirtXP" ).replaceWith( data.base_experience );

$( "#squirtImg" ).attr('src', data.sprites.front_default );


   }
});

//Pikachu

$.ajax({ 
   type: "GET",
   dataType: "json",
   url: "https://pokeapi.co/api/v2/pokemon/25",
   success: function(data){        
       console.log(data);
       
       
$( "#pikaName" ).replaceWith( data.name );

$( "#pikaID" ).replaceWith( data.id );

$( "#pikaType" ).replaceWith( data.types[0].type.name );

$( "#pikaXP" ).replaceWith( data.base_experience );

$( "#pikaImg" ).attr('src', data.sprites.front_default );


   }
});

//Chimchar

$.ajax({ 
   type: "GET",
   dataType: "json",
   url: "https://pokeapi.co/api/v2/pokemon/390",
   success: function(data){        
       console.log(data);
       
       
$( "#chimName" ).replaceWith( data.name );

$( "#chimID" ).replaceWith( data.id );

$( "#chimType" ).replaceWith( data.types[0].type.name );

$( "#chimXP" ).replaceWith( data.base_experience );

$( "#chimImg" ).attr('src', data.sprites.front_default );


   }
});

//Treecko

$.ajax({ 
   type: "GET",
   dataType: "json",
   url: "https://pokeapi.co/api/v2/pokemon/252",
   success: function(data){        
       console.log(data);
       
       
$( "#treeName" ).replaceWith( data.name );

$( "#treeID" ).replaceWith( data.id );

$( "#treeType" ).replaceWith( data.types[0].type.name );

$( "#treeXP" ).replaceWith( data.base_experience );

$( "#treeImg" ).attr('src', data.sprites.front_default );


   }
});

//Froakie

$.ajax({ 
   type: "GET",
   dataType: "json",
   url: "https://pokeapi.co/api/v2/pokemon/656",
   success: function(data){        
       console.log(data);
       
       
$( "#froakName" ).replaceWith( data.name );

$( "#froakID" ).replaceWith( data.id );

$( "#froakType" ).replaceWith( data.types[0].type.name );

$( "#froakXP" ).replaceWith( data.base_experience );

$( "#froakImg" ).attr('src', data.sprites.front_default );


   }
});