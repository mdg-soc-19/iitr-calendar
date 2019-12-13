package com.example.iitrcalendar;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.recyclerview.widget.RecyclerView;

import java.util.LinkedList;

public class TimeSlotAdapter extends
        RecyclerView.Adapter<TimeSlotAdapter.TimeViewHolder> {

    private final LinkedList<String> mTimeSlot;
    private LayoutInflater mInflater;

    public TimeSlotAdapter(Context context,
                           LinkedList<String> wordList) {
        mInflater = LayoutInflater.from(context);
        this.mTimeSlot = wordList;
    }

    public TimeSlotAdapter.TimeViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        View mItemView = mInflater.inflate(R.layout.timeslot,
                parent, false);
        return new TimeViewHolder(mItemView, this);
    }

    @Override
    public void onBindViewHolder(@NonNull TimeSlotAdapter.TimeViewHolder holder, int position) {
        String mCurrent = mTimeSlot.get(position);
        holder.timeslot.setText(mCurrent);
    }

    @Override
    public int getItemCount() {
        return mTimeSlot.size();
    }

    class TimeViewHolder extends RecyclerView.ViewHolder {
        public final TextView timeslot;
        final TimeSlotAdapter mAdapter;

        public TimeViewHolder(View itemview, TimeSlotAdapter adapter) {
            super(itemview);
            timeslot = itemview.findViewById(R.id.time);
            this.mAdapter = adapter;
        }
    }
}
