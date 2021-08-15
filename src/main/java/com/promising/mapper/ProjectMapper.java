package com.promising.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.promising.vo.ProjectVO;

@Mapper
public interface ProjectMapper {

	@Select("SELECT * FROM PROJECT")	// 프로젝트 전체 리스트
	List<ProjectVO> findAll();
	
	@Select("SELECT * FROM PROJECT WHERE SEQ = #{SEQ}")
	ProjectVO findBySeq(@Param("seq") int seq);
	@Select("SELECT MAX(SEQ) FROM PROJECT")
	int getSeq();
}