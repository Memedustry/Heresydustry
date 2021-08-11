//Big thanks to MrDuck557

Events.on(ContentInitEvent, ()=>{var fart=Vars.content.getByName
(ContentType.block,"heresy-fartgen");
Vars.content.blocks()
.each(bloc=>{try{bloc.shootSound=fart.ambientSound;} catch(a) {};});}
);