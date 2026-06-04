package com.stock.demo.service;

import com.stock.demo.entity.Holdings;
import com.stock.demo.entity.Orders;
import com.stock.demo.entity.Positions;
import com.stock.demo.repository.HoldingsRepository;
import com.stock.demo.repository.OrdersRepository;
import com.stock.demo.repository.PositionsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class InsertData {

    @Autowired
    private HoldingsRepository holdingsRepository;

    @Autowired
    private PositionsRepository positionsRepository;

    @Autowired
    private OrdersRepository ordersRepository;

    public String insertHoldings() {

        Holdings h1 = new Holdings();

        h1.setQty(10);
        h1.setAvg(538.05);
        h1.setPrice(541.15);
        h1.setNet("+0.58%");
        h1.setDay("+2.99%");

        holdingsRepository.save(h1);

        Holdings h2 = new Holdings();
        h2.setQty(5);
        h2.setAvg(300.50);
        h2.setPrice(320.75);
        h2.setNet("+1.20%");
        h2.setDay("+0.80%");

        Holdings h3 = new Holdings();
        h3.setQty(8);
        h3.setAvg(1000.00);
        h3.setPrice(1025.00);
        h3.setNet("+2.00%");
        h3.setDay("+1.50%");

        holdingsRepository.save(h2);
        holdingsRepository.save(h3);

        return "Insertion Done!";
    }

    public String insertPositions() {

        Positions p1 = new Positions();

        p1.setProduct("CNC");
        p1.setName("EVEREADY");
        p1.setQty(2);
        p1.setAvg(316.27);
        p1.setPrice(312.35);
        p1.setNet("+0.58%");
        p1.setDay("-1.24%");
        p1.setLoss(true);

        positionsRepository.save(p1);


        Positions p2 = new Positions();

        p2.setProduct("CNC");
        p2.setName("JUBLFOOD");
        p2.setQty(1);
        p2.setAvg(3124.75);
        p2.setPrice(3082.65);
        p2.setNet("+10.04%");
        p2.setDay("-1.35%");
        p2.setLoss(true);

        positionsRepository.save(p2);

        return "Positions Inserted!";
    }

    public String insertOrders() {

        Orders o1 = new Orders();

        o1.setName("INFY");
        o1.setQty(10);
        o1.setPrice(1450.75);
        o1.setMode("BUY");

        ordersRepository.save(o1);


        Orders o2 = new Orders();

        o2.setName("TCS");
        o2.setQty(5);
        o2.setPrice(3200.50);
        o2.setMode("SELL");

        ordersRepository.save(o2);

        return "Orders Inserted!";
    }
}