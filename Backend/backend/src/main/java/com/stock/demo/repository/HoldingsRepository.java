package com.stock.demo.repository;

import com.stock.demo.entity.Holdings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HoldingsRepository extends JpaRepository<Holdings, Integer> {

}