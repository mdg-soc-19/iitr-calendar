package com.example.iitrtimetable;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import android.os.Bundle;

import java.util.LinkedList;

public class Monday extends AppCompatActivity {
    private final LinkedList<String> mTimeSlot = new LinkedList<>();
    private RecyclerView mRecyclerView;
    private TimeSlotAdapter mAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_monday);
        mTimeSlot.addLast("0000 hrs - 0100 hrs  free");
        mTimeSlot.addLast("0100 hrs - 0200 hrs  free");
        mTimeSlot.addLast("0200 hrs - 0300 hrs  free");
        mTimeSlot.addLast("0300 hrs - 0400 hrs  free");
        mTimeSlot.addLast("0400 hrs - 0500 hrs  free");
        mTimeSlot.addLast("0500 hrs - 0600 hrs  free");
        mTimeSlot.addLast("0600 hrs - 0700 hrs  free");
        mTimeSlot.addLast("0700 hrs - 0800 hrs  free");
        mTimeSlot.addLast("0800 hrs - 0900 hrs  L HSN 001B");
        mTimeSlot.addLast("0900 hrs - 1000 hrs  free");
        mTimeSlot.addLast("1000 hrs - 1100 hrs  T MAN 001");
        mTimeSlot.addLast("1100 hrs - 1200 hrs  free");


        mTimeSlot.addLast("1200 hrs - 1300 hrs  free");
        mTimeSlot.addLast("1300 hrs - 1400 hrs  free");
        mTimeSlot.addLast("1400 hrs - 1500 hrs  L CSN 103");
        mTimeSlot.addLast("1500 hrs - 1600 hrs  L MAN 001");
        mTimeSlot.addLast("1600 hrs - 1700 hrs  L PHN 005");
        mTimeSlot.addLast("1700 hrs - 1800 hrs  L ECN 101");
        mTimeSlot.addLast("1800 hrs - 1900 hrs  W SDS");
        mTimeSlot.addLast("1900 hrs - 2000 hrs  free");
        mTimeSlot.addLast("2000 hrs - 2100 hrs  free");
        mTimeSlot.addLast("2100 hrs - 2200 hrs  M MDG ");
        mTimeSlot.addLast("2200 hrs - 2300 hrs  free");
        mTimeSlot.addLast("2300 hrs - 0000 hrs  free");

// Get a handle to the RecyclerView.
        mRecyclerView = findViewById(R.id.recyclerview);
// Create an adapter and supply the data to be displayed.
        mAdapter = new TimeSlotAdapter(this, mTimeSlot);
// Connect the adapter with the RecyclerView.
        mRecyclerView.setAdapter(mAdapter);
// Give the RecyclerView a default layout manager.
        mRecyclerView.setLayoutManager(new LinearLayoutManager(this));
    }
}
