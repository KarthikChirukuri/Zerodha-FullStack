package com.stock.demo.dto;

import lombok.Data;

@Data
public class OrderDTO {
    private String name;
    private int qty;
    private double price;
    private String mode;
}
