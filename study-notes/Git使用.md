## 1.配置git的仓库默认设置：
	git config --global user.name "yourname"
	git config --global user.email "youremail@email.com"
	其中--global可以换成：
	--system：表示设置系统登录用户之内的所有仓库的配置信息
	--local：表示设置某个仓库单独的配置信息
## 2.创建版本库：
	1.新建一个版本库的目录：mkdir newgit
	2.初始化该版本目录：git init
## 3.本地仓库操作：
#### 1.进入本地仓库目录下，创建文件：
	例如：将一段string输入进一个新的文件：echo "string" > newfile.txt / touch newfile.txt & vi newfile.txt
	此时使用git status命令可以查看当前仓库的状态：显示untracked files
#### 2.添加文件至暂存区：git add filename / git add .
#### 3.文件从暂存区提交至本地仓库：git commit -m "注释"
	注：git commit -a / git commit --all：提交至仓库适应情形
	1.针对已经提交过（commit）的文件：
	1.会将已添加至暂存区（add）的文件自动提交
	2.会将未添加但已修改（modified）的文件自动提交
	3.会将普通删除（rm filename）的文件自动提交
	2.对新建的文件和文件夹无效
#### 4.查看改动状态：git diff
	1.git diff filename：文件的修改状态以及修改的内容
	2.git diff HEAD HEAD~1：查看两个版本库之间的改动情况
#### 5.显示日志：git log
	1.git log：显示所有的提交历史
	2.git log --pretty=oneline/short/full：一行/简要/完整显示提交历史
	3.git log --graph：图形显示提交历史的变化，图形为有向无环图
	git show-branch HEAD也可图形显示提交历史
	gitk命令可以在可视化图形界面详细显示提交历史
	4.git log --abbrev-commit：简要显示提交历史
	5.git log -1/-n：只显示一/n次提交历史
	6.git log -p：显示提交历史的详细变更情况，包括改动的内容，等同于git show history/hash
	7.git log --stat：显示提交中更改的文件以及改动的行数
	8.git log since..until：显示从since到until的所有提交，不包括since，且since提交时间比until更早
	等同于git log ^since until
	也可表示为两个不同版本库的提交，其中包括在until的提交单不在since中的提交，并且until已并入since中的提交不算入until中
	疑惑：git log until...since也有此功能
	9.git log --follow：显示某文件所有变更
#### 6.删除文件：git rm
	1.git rm：只能用于已经提交过的文件，恢复使用git checkout -- file
	2.git rm --cached：将已添加的文件变为修改（modified）的文件
	3.git rm -f：强制删除已经add和commit过的文件，但对新建的文件（夹）不起作用
#### 7.回退版本库：git reset
	1.git reset --hard HEAD~n/hash：回到指定的版本(旧的版本和新的版本）
	若为回到新的版本库，在不知道hash值的情况下，用git reflog获取哈希值
#### 8.创建合并分支：git branch
	1.创建分支：git branch dev
	2.切换到分支：git checkout dev
	3.创建并切换到分支：git checkout -b dev
	4.查看分支：git branch
	5.删除分支：git branch -d dev
	6.合并分支：git merge dev
#### 9.远程：
	1.链接到远程仓库：git remote add origin master
	2.将本地分支推送到远程：git push -u origin master
	3.将远程仓库克隆到本地：git clone url
#### 10.隐藏工作现场：git stash
	1.查看隐藏的工作现场：git stash list
	2.恢复工作现场：git stash apply(stash不删除），删除stash用git stash drop
	git stash pop（同时删除stash）
#### 11.移动：git mv lod new
		 	 
## 4.符号解释：
	^：用来选择不同的父提交，例如：
	HEAD^ / HEAD^1：表示HEAD的父提交，HEAD^2：表示HEAD的第二个父提交，此中情形为版本库合并的情况
	~：用来表示直系祖先的提交，例如：
	HEAD~1：表示HEAD的父提交，HEAD~2：表示HEAD的祖父提交
	
	
	
	
	
	
	
	
	
	
	
	
	
	 
