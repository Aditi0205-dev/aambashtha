
var sysid = 'f9bae39c132363005a6b785d5144b011';
var inc = new GlideRecord('incident');
inc.addQuery('sys_id',sysid);
inc.query();
inc.next();
//gs.print(inc.number);
//gs.print(inc.state);
var Sla= new GlideRecord('task_sla');
Sla.addQuery('task.number',inc.number);
Sla.query();
while(Sla.next())
{
	//gs.print('sla:'+ Sla.getDisplayValue('sla'));
	var t = Sla.getDisplayValue('sla').toString();
	if (t.indexOf('Response')>=0)
	{
		var response = Sla.getValue('stage');
		//gs.print("response:"+response);
	}
	else
	{
		var resolution = Sla.getValue('stage');
		//gs.print("resolution:"+resolution);
	}
}
if (inc.state=='1'||inc.state=='2')
{
    if(inc.u_responded == false)
    {
      if(response=='in_progress' && resolution=='in_progress')
        gs.print("response: In progress && resolution==In progress");
      else
        gs.print("error1");
     } 
	 
    if (inc.u_responded == true){
        if(response=='completed' && resolution=='in_progress')
              gs.print("response Completed and resolution in progress");  
        }
   
      else
        gs.print("error2");
     
}


if (inc.state =='3'||inc.state =='8')
{
  if(response =='completed' && resolution =='in_progress')
     gs.print("true");
    
  else
     gs.print("false");
}

if (inc.state =='5'||inc.state =='4')
{
 if(response =='completed' && resolution =='paused')
     gs.print("true1");
    
  else
     gs.print("false1");
  }


if (inc.state =='7')
{
if(response=='completed' && resolution=='completed')
     gs.print("true");
 
  else
     gs.print("false");
  
}