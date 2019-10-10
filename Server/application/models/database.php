<?php   
class Database extends CI_Model {
    function internal()
	{
        $query=$this-> db ->query('select p.*,i.temperature as t,
        e.temperature as ex,e.ex_id, b.beat
        from people p, internal_temps i,
        external_temps e,beats b
        where p.id=i.id and p.id=e.id and p.id=b.id and e.ex_id=(select max(ex_id) 
                                                              from external_temps
                                                              where id = p.id)
        group by p.id
        order by e.ex_id desc');
		$res=$query;
		return $res->result();
    }
    function external()
	{
        $query=$this-> db ->query('select p.*,i.* 
                                    from people p, external_temps i
                                    where p.id=i.id');
		$res=$query;
		return $res->result();
    }
    function beats()
	{
        $query=$this-> db ->query('select p.*,i.* 
                                    from people p, beats i
                                    where p.id=i.id');
		$res=$query;
		return $res->result();
	}
}