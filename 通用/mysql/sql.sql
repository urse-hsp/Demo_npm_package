-- 记录查询
SELECT * FROM `user` -- 表
SHOW CREATE DATABASE user -- 创建方式

SELECT * FROM `user` WHERE name='hsp' -- 按条件查询: 表-行
SELECT id FROM `user` WHERE name='hsp'  -- 按条件查询: 字段
SELECT name FROM `user`  -- 指定的列

-- 运算符 相等 =   不等 <>  !=
-- 区间. between  ...and... 在两者之间取值 between 70 and 80
select id from `user` where between 0 and 2
-- in(值,值,值) 在指定值中任取一个 in(70,80,90) 值可以是70、80或者90
-- like '模糊查询pattern' 进行模糊查询, 表达式有两个占位符,  % 任意n个字符， _ 任意单个字符
-- is null 判断该列值为空
-- and 逻辑与，or 逻辑或，not 逻辑非
select name from `user` where and

-- 对查询的结果进行排序. asc升序 desc降序
select * from user order by `name` desc
select name as na from user where name = 'hsp' -- 别名
select DISTINCT name as na from user where name = 'hsp' -- 过滤


-- 表内的增删改--------
insert into user (name,age)  values ('小王2',12) -- 添加
ALTER TABLE user add age INT
update user set age = 13 where name= '小王2'  -- 修改
delete from user where name='小王2'

-- 函数-----
-- count 函数统计：select count(*) | count(列名) from 表名  -- 如果这一列中有null 不会被统计在其中。
-- sum 函数求和：select sum(列名) from 表名;
-- avg 函数平均数： select avg(列名) from 表名;
-- max, min 函数平均数： select min(age) from students
 -- select count(*)|count(列名) from 表名

--  分组
 select `age` from user group by `age`

 




-- 多表查询
-- 内连接查询 ---------两表的公共部分。
 select user.name,user2.name from user,user2 where user.name = user2.name
 select * from user inner join user2 on  user.name = user2.name
--  外连接查询
-- 用左边表去右边表中	查询对应记录，不管是否找到，都将显示左边表中全部记录。
-- 即：虽然右表没有对应的数据，也要把他查询出来。
--   外链接：左外连接、右外连接、全连接、自连接。
select * from user left outer join user2 on user.name = user2.name
-- 右外连接
select * from 表1 right outer join 表2 on 条件;




-- 代码创建库表列 ---------------
create database user1 -- 
create database user2 character set utf8 -- 

ues text -- 切换库
select database() -- 查询使用库

-- 创建表 列名-类型(长度)-约束
-- 数据类型：int bigint double float numeric decimal char varchar date timestamp datetime time
-- 约束 主键约束primary key :区分与其他的不同，则会一列在数据表中不允许重复       
-- 唯一约束unique :改列的（字段）的值不允许重复，一个表中可以有多个约束，只能有一个或俩个主键约束   
-- 非空约束not null     自增长auto_increment

-- 外键的代码代表公式：foreign key (列名)  references  主表名 (列名)
-- fornign key+(列名)  代表给哪一个加外键 references 要引用哪个表里的列
create table class(
    code varchar(20) primary key,
    name varchar(20) not null
)
create table ceshi(
    ids int auto_increment primary key,
    uid varchar(20),
    name varchar(20),
    class varchar(20),
    foreign key (class)  references class(code) 
)
drop table ceshi -- 删除表


ALTER table class add age int -- 增加列
alter table class modify age varchar(20) -- 修改列类型、长度和约束
ALTER table class change age sex VARCHAR(40) -- 修改列名称
alter table class drop sex -- 删除列
rename table class  to class2 -- 修改表名
show tables -- 库中有多少张表
desc class2 -- 表结构
show create table class2 -- 表的编码表
