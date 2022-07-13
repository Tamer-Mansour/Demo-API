import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
        <Grid item xs={12}>
            <Paper sx={{p: 12, display: 'flex', flexDirection: 'column'}}>
                <h1>Page Not Found</h1>
                <p>(●'◡'●)😃😃😃😃😃😃😃(●'◡'●)</p>
            </Paper>
        </Grid>

    </div>
  );
};
export default PageNotFound;
