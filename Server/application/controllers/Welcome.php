<?php
class Welcome extends CI_Controller {

	function __construct()
	{
		parent::__construct();
		$this->load->model('database');
	}

	public function index()
	{
		//$data['info']=$this->us();
		//$data['info'] = '<script src="assets/js/extra.js"></script>';
		$this->load->view('welcome');
	}
	public function otro()
	{
		//$data['info']=$this->us();
		//$data['info'] = '<script src="assets/js/extra.js"></script>';
		$this->load->view('welcome');
	}
	public function us()
	{
		$data=$this->database->internal();
		
		echo json_encode($data);
	}
}
