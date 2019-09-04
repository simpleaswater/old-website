import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles({
    code: {
        backgroundColor: '#F2F3F4',
        fontSize: '0.875rem',
        fontFamily: "\"Roboto Mono\", \"monospace\"",
    },
    link: {
        color: "#0000EE"
    },
    note: {
        borderLeft: "6px solid #3f51b5",
        backgroundColor: "#ddffff"
    }
})

export default function Cid() {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
            <Grid key={0} xs={12} item>
                <Typography variant="h4">
                    <b>Content Identifiers (CIDs)</b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    A <i>content identifier</i>, or CID, is a label used to point to material in IPFS. It doesn’t indicate where the content is stored, but it forms a kind of address based on the content itself. CIDs are short, regardless of the size of their underlying content.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    CIDs are based on the content’s <NavLink className={classes.link} to="/ipfs/concepts/hashes"> cryptographic hash</NavLink>. That means:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            Any difference in content will produce a different CID and
                        </Typography>
                        <br />
                    </li>
                    <li>
                        <Typography variant="body1">
                            The same piece of content added to two different IPFS nodes using the same settings will produce exactly the same CID.
                            </Typography>
                    </li>
                </ul>
            </Grid>


            <Grid key={0} xs={12} item>
                <Typography variant="h5">
                    <b>
                        CID formats
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    CIDs can take a few different forms with different encoding bases or CID versions. Many of the existing IPFS tools still generate v0 CIDs, although the files (<NavLink className={classes.link} to="/ipfs/concepts/mfs">MFS</NavLink>) and object operations now use CIDv1 by default.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h6">
                    <b>
                        Version 0
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    When IPFS was first designed, we used base 58-encoded multihashes as the content identifiers (This is simpler, but much less flexible than newer CIDs). CIDv0 is still used by default for many IPFS operations, so you should generally try to support v0.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    If a CID is 46 characters starting with “Qm”, it’s a CIDv0 (for more details, check the <a target="_blank" href="https://github.com/multiformats/cid/blob/ef1b2002394b15b1e6c26c30545fd485f2c4c138/README.md#decoding-algorithm"> decoding algorithm</a> in the CID specification).
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="h6">
                    <b>
                        Version 1
                    </b>
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    CID v1 contains some leading identifiers that clarify exactly which representation is used, along with the content-hash itself. These include:
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <ul>
                    <li>
                        <Typography variant="body1">
                            A <a target="_blank" href="https://github.com/multiformats/multibase"> multibase</a> prefix, specifying the encoding used for the remainder of the CID
                            </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            A CID version identifier, which indicates which version of CID this is
                            </Typography>
                    </li>
                    <br />
                    <li>
                        <Typography variant="body1">
                            A <a target="_blank" href="https://github.com/multiformats/multicodec">multicodec</a> identifier, indicating the format of the target content — it helps people and software to know how to interpret that content after the content is fetched
                        </Typography>
                    </li>
                </ul>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    These leading identifiers also provide forward-compatibility, supporting different formats to be used in future versions of CID.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    You can use the first few bytes of the CID to interpret the remainder of the content address and know how to decode the content after it’s fetched from IPFS. For more details, check out the <a target="_blank" href="https://github.com/multiformats/cid">CID specification</a>. It includes a <a target="_blank" href="https://github.com/multiformats/cid/blob/ef1b2002394b15b1e6c26c30545fd485f2c4c138/README.md#decoding-algorithm">decoding algorithm</a> and links to existing software implementations for decoding CIDs.
                </Typography>
            </Grid>

            <Grid key={0} xs={12} item>
                <Typography variant="body1">
                    You might also want to check out the <a target="_blank" href="https://cid.ipfs.io/#QmY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU">CID Inspector</a> or <a target="_blank" href="https://explore.ipld.io/#/explore/QmY7Yh4UquoXHLPFo2XbhXkhBvFoPwmQUSa92pxnxjQuPU">CID Info in IPLD Explorer</a> for an interactive breakdown of differently-formatted CIDs.
                </Typography>
            </Grid>
        </Grid>
    )
}