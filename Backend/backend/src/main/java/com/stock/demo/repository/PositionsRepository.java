package com.stock.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.stock.demo.entity.Positions;

public interface PositionsRepository extends JpaRepository<Positions, Integer> {

}
