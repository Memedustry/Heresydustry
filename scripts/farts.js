//Big thanks to MrDuck557

Events.on(ContentInitEvent, ()=>{var fart=Vars.content.getByName
(ContentType.block,"heresy-fartgen").ambientSound;

print(fart)

Vars.content.blocks().each(bloc=>{try{

  bloc.shootSound=fart;
  
} catch(a) {};

});

/*Vars.content.units().each(unit=>{try{ // Disabled cuz it got annoying..

  unit.weapons.get(0).shootSound=fart;
  unit.weapons.get(1).shootSound=fart;
  unit.weapons.get(2).shootSound=fart;
  unit.weapons.get(3).shootSound=fart; // Yes i know it's chunky but whatever works
  unit.weapons.get(4).shootSound=fart;
  unit.weapons.get(5).shootSound=fart;
  unit.weapons.get(6).shootSound=fart;
  unit.weapons.get(7).shootSound=fart;

} catch(a) {};

});*/

});