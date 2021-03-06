package com.promising.vo;

import java.sql.Timestamp;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@Entity
@ToString(exclude="project")
@SequenceGenerator(name="COMMUNITY_SEQ_GENERATOR",sequenceName = "COMMUNITY_SEQ" ,initialValue = 1,allocationSize = 1)
@Table(name="PR_COMMUNITY")
public class CommunityVO {

	@Id
	@GeneratedValue(strategy = GenerationType. SEQUENCE, generator = "COMMUNITY_SEQ_GENERATOR")
	private Long communityno;
	@Column(nullable=false , length=100)
	private String writer;
	@Column(nullable=false , length=4000)
	private String contents;
	@Column(nullable=false , length=1)
	private String secret;
	@CreationTimestamp
	private Timestamp regDate;
	@UpdateTimestamp
	private Timestamp updateDate;
	@Column(nullable=false)
	private Long pno;
	
	@JsonIgnore
	@ManyToOne(fetch=FetchType.LAZY)
	private ProjectVO project;
	
	@JsonIgnore
	@OneToMany(mappedBy="community", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	private List<CommentVO> comment;
	
}
