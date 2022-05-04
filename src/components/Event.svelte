<script>
    export let event;
    
    const pad = (s) => `00${s}`.slice(-2); 
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    // const getMonthNumeric = (date) => pad(date.getMonth() + 1);
    const getMonthString = (date) => months[date.getMonth()];
    const getYear = (date) => date.getFullYear();
    const getDay = (date) => pad(date.getDate());
</script>

<style>
    .event{
        display: grid;
        grid-template-columns: 2fr 10fr;
        gap: 1rem;
        color: var(--light);
        align-items: center;
    }
    .date{
        display: flex;
        gap: 1rem;
        flex-direction: row;
        align-items: center;
    }
    .day{
        font-size: 4.5rem;
        color: var(--accent)
    }
    .month,
    .year{
        display: block;
        font-size: 1.6rem;
    }
    .month{
        color: var(--neutral-dark);
        text-transform: uppercase;
        font-size: 1.8rem;
    }

    /* @media screen and (max-width: 640px) {
        .event{
            
        }
    } */

</style>

<div class="event">
    <div class="date">
        <span class="day">{getDay(event.date)}</span>
        <div>
            <span class="month">{getMonthString(event.date)}</span>
            <span class="year">{getYear(event.date)}</span>
        </div>
    </div>
    <div>
        <p class="event-name">{event.name} / {event.location}</p>
    </div>
</div>