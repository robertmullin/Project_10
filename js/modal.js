//Maybe?
    
$.ajax({ 
   type: "GET",
   dataType: "json",
   url: "https://pokeapi.co/api/v2/pokemon/4",
   success: function(data){        
       console.log(data);
       
       
$( "#charName" ).replaceWith( data.name );

$( "#charType1" ).replaceWith( data.id );

$( "#charType2" ).replaceWith( data.types[0].type.name );

$( "#charBody" ).replaceWith(  );

$("#charImg").attr('src', data.sprites.front_default );


   }
});

// https://jsfiddle.net/vxf7rg0L/68/