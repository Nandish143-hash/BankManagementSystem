package com.mallikarjun.bankmanagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.mallikarjun.bankmanagement.entity.Account;

public interface AccountRepository extends JpaRepository<Account, Integer> {

}