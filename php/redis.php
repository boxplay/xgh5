<?php
class Red{
	public $redis;
  /**
   * 私有化构造函数，防止类外实例化
   *
   * @param unknown_type $dbnumber
   */
  public function __construct ()
  {
    // 链接数据库
    $this->redis = new Redis();
    $this->redis->connect('172.17.247.68', 6379);
    $this->redis->auth('Someet');
  }
  /**
   * 私有化克隆函数，防止类外克隆对象
   */
  public function __clone ()
  {}
  /**
   * 类的唯一公开静态方法，获取类单例的唯一入口
   *
   * @return object
   */
  public static function getRedisInstance ()
  {
    if (! (self::$instance instanceof self)) {
      self::$instance = new self();
    }
    return self::$instance;
  }
  /**
   * 获取redis的连接实例
   *
   * @return Redis
   */
  public function getRedisConn ()
  {
    return $this->redis;
  }

}